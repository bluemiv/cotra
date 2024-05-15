import React, { useEffect, useState } from 'react';
import { THEME } from '@/constants';
import { Icons } from '@/components';

const ThemeButton = () => {
  const [theme, setTheme] = useState<string>(THEME.LIGHT);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;
    if (theme === THEME.LIGHT) {
      body.classList.remove(THEME.DARK);
    } else {
      body.classList.add(THEME.DARK);
    }
  }, [theme]);

  return (
    <button
      className="h-[40px] px-sm py-xs rounded-md outline-none"
      onClick={() => setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)}
    >
      {theme === THEME.LIGHT ? (
        <Icons.MoonFill className="text-blue-600" />
      ) : (
        <Icons.SunFill className="text-orange-400" />
      )}
    </button>
  );
};

export default ThemeButton;
