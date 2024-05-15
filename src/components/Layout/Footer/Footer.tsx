import React from 'react';
import { Icons, Link } from '@/components';

const Footer = () => {
  return (
    <footer className="max-h-footer text-sm flex flex-col items-center gap-md py-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
      <div>© TaehongKim(bluemiv). 2024.</div>
      <div className="flex gap-sm">
        {[
          { label: 'Blog', href: 'https://bluemiv.tistory.com/', icon: <Icons.Tistory /> },
          { label: 'Github', href: 'https://github.com/bluemiv', icon: <Icons.Github /> },
        ].map(({ label, href, icon }) => (
          <Link key={label} href={href} className="flex items-center gap-xs">
            {icon}
            {label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
