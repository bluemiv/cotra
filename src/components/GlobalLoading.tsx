import React from 'react';
import { joinClassNames } from '@/utils';

interface TProps {
  loading: boolean;
}

const GlobalLoading = ({ loading }: TProps) => {
  return (
    <div
      className={joinClassNames(
        'transition ease-in-out duration-200',
        loading
          ? 'opacity-100 backdrop-blur-sm bg-zinc-200/10 w-screen h-screen fixed top-0 left-0 flex items-center justify-center'
          : 'opacity-0',
      )}
    >
      {loading && (
        <div className="animate-spin ease-in-out duration-75 border-4 border-brand-600 border-b-brand-200 w-[40px] h-[40px] rounded-full"></div>
      )}
    </div>
  );
};

export default GlobalLoading;
