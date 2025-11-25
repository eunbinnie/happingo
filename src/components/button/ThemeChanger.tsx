'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme('light')}>
        <Sun />
      </button>
      <button onClick={() => setTheme('dark')}>
        <Moon />
      </button>
    </div>
  );
};

export default ThemeChanger;
