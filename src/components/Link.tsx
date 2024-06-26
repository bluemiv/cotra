import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { TPropsWithBaseComponent } from '@/types';
import { joinClassNames } from '@/utils';

interface TProps {
  href: string;
  target?: '_self' | '_blank';
}

const Link = ({ href, target, children, className }: TPropsWithBaseComponent<TProps>) => {
  return (
    <ReactRouterDomLink
      to={href}
      className={joinClassNames(
        'block h-[40px] hover:text-black dark:hover:text-white transition duration-200 ease-in-out',
        className,
      )}
      target={target}
    >
      {children}
    </ReactRouterDomLink>
  );
};

export default Link;
