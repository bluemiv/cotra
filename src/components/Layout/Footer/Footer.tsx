import React from 'react';
import { Link } from '@/components';

const Footer = () => {
  return (
    <footer className="text-sm flex flex-col items-center gap-md py-xl">
      <div className="text-zinc-500">© TaehongKim(bluemiv). 2024.</div>
      <div className="flex gap-sm text-zinc-500">
        <Link href="https://bluemiv.tistory.com/">Blog</Link>
        <Link href="https://github.com/bluemiv">Github</Link>
      </div>
    </footer>
  );
};

export default Footer;
