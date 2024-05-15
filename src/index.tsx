import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTE_PATH } from '@/constants';
import { BaseTemplate } from '@/templates';
import { CoinDetailPage, MarketPage } from '@/pages';
import { replaceRoutePath } from '@/utils/url';
import App from '@/App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <BaseTemplate />,
    children: [
      {
        path: ROUTE_PATH.ROOT,
        element: <Navigate to={replaceRoutePath(ROUTE_PATH.MARKETS, { page: 'market' })} replace />,
        index: true,
      },
      {
        path: ROUTE_PATH.MARKETS,
        element: <MarketPage />,
      },
      {
        path: ROUTE_PATH.COIN_DETAIL,
        element: <CoinDetailPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
