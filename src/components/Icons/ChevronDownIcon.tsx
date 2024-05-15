import React from 'react';
import { TPropsWithClassName, TPropsWithOnClick } from '@/types';
import { joinClassNames } from '@/utils';

const ChevronDownIcon = ({ className, onClick }: TPropsWithClassName<TPropsWithOnClick>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={joinClassNames(className, !!onClick ? 'cursor-pointer' : '')}
    viewBox="0 0 16 16"
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
);
export default ChevronDownIcon;
