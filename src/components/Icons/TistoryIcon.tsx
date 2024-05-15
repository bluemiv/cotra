import React from 'react';
import { TPropsWithClassName, TPropsWithOnClick } from '@/types';
import { joinClassNames } from '@/utils';

const TistoryIcon = ({ className, onClick }: TPropsWithClassName<TPropsWithOnClick>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={joinClassNames(className, !!onClick ? 'cursor-pointer' : '')}
    viewBox="0 0 408.4 408.4"
    onClick={onClick}
  >
    <g>
      <circle className="cls-1" cx="58.18" cy="58.18" r="58.18" />
      <circle className="cls-1" cx="204.2" cy="58.18" r="58.18" />
      <circle className="cls-1" cx="204.2" cy="204.2" r="58.18" />
      <circle className="cls-1" cx="204.2" cy="350.22" r="58.18" />
      <circle className="cls-1" cx="350.22" cy="58.18" r="58.18" />
    </g>
  </svg>
);

export default TistoryIcon;
