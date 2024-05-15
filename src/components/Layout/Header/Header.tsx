import React from 'react';
import Nav from './Nav';
import { Link } from '@/components';
import { replaceRoutePath } from '@/utils';
import { ROUTE_PATH } from '@/constants';

const Header = () => {
  return (
    <header className="sticky top-0 h-header px-lg flex items-center gap-sm bg-white/70 backdrop-blur-sm shadow z-10">
      <Link
        href={replaceRoutePath(ROUTE_PATH.MARKETS, { page: 'market' })}
        className="font-bold text-md sm:text-lg"
      >
        COTRA
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
