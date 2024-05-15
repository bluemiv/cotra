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
      className={joinClassNames('hover:text-black transition duration-200 ease-in-out', className)}
      target={target}
    >
      {children}
    </ReactRouterDomLink>
  );
};

export default Link;
