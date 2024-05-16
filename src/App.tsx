import React, { useEffect } from 'react';
import { GlobalLoading, Toast } from '@/components';
import { useGlobalLoading } from '@/hooks/globalLoading';
import { coinApiCaller } from '@/utils';
import { useToast } from '@/hooks';

const App = () => {
  const isGloabalLoading = useGlobalLoading();
  const showToast = useToast();

  useEffect(() => {
    coinApiCaller.initInterceptor({
      response: {
        onError: (error) => {
          if (/network\serror/.test(error.message.toLowerCase())) {
            showToast(`API 호출 수를 초과했습니다. 잠시 후 다시 시도해주세요. ${error.message}`);
            return Promise.resolve(error);
          }

          showToast(`시스템 오류가 발생했습니다. ${error.message}`);
          return Promise.reject(error);
        },
      },
    });
  }, []);

  return (
    <>
      <GlobalLoading loading={isGloabalLoading} />
      <Toast />
    </>
  );
};

export default App;
