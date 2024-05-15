import React from 'react';
import { Icons, Link } from '@/components';

const Footer = () => {
  return (
    <footer className="max-h-footer text-sm flex flex-col items-center gap-md py-xl bg-zinc-50">
      <div className="text-zinc-500">© TaehongKim(bluemiv). 2024.</div>
      <div className="flex gap-sm text-zinc-500">
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
