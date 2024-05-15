import React from 'react';
import { TPropsWithBaseComponent } from '@/types';
import { joinClassNames } from '@/utils';

interface TProps {
  active?: boolean;
  onClick: () => void;
}

const Tab = ({ active = false, children, className, onClick }: TPropsWithBaseComponent<TProps>) => {
  return (
    <button
      className={joinClassNames(
        active
          ? 'bg-white dark:bg-zinc-800 shadow-sm font-semibold'
          : 'hover:shadow-sm hover:bg-white/40 dark:hover:bg-zinc-800/40',
        'flex-1 p-md transition ease-in-out duration-200 rounded-md',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;
