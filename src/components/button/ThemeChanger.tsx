'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/cn';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme !== 'dark';

  return (
    <div
      className={cn(
        'ml-1.5 flex items-center justify-center',
        'rounded-full p-1 transition-colors duration-300',
        'hover:bg-gray-200 dark:hover:bg-gray-100/50'
      )}
    >
      <button
        type="button"
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
      >
        {isLight ? <Sun size={14} /> : <Moon size={14} />}
      </button>
    </div>
  );
};

export default ThemeChanger;
