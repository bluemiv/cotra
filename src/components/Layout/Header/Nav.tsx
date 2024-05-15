import React from 'react';
import { ROUTE_PATH } from '@/constants';
import { Link } from '@/components';
import { replaceRoutePath } from '@/utils/url';
import { MARKETS_PAGE_KEY } from '@/feature/coin';

const Nav = () => {
  return (
    <nav className="flex-1 flex items-center justify-end">
      <ul className="flex gap-sm text-sm sm:text-base">
        {[
          {
            label: '시세 목록',
            href: replaceRoutePath(ROUTE_PATH.MARKETS, { page: MARKETS_PAGE_KEY.MARKET }),
          },
          {
            label: '북마크 목록',
            href: replaceRoutePath(ROUTE_PATH.MARKETS, { page: MARKETS_PAGE_KEY.BOOKMARK }),
          },
        ].map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="hover:bg-zinc-100 active:bg-zinc-200 px-sm py-xs rounded-md"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
