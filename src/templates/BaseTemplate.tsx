import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary, Layout } from '@/components';

const BaseTemplate = () => {
  return (
    <>
      <Layout.Header />
      <Layout.Contents>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Layout.Contents>
      <Layout.Footer />
    </>
  );
};

export default BaseTemplate;
