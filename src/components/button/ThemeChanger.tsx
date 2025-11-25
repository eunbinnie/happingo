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
        'ml-[2px] flex items-center justify-center',
        'rounded-full p-[2px] transition-colors duration-300',
        isLight ? 'hover:bg-gray-200' : 'hover:bg-gray-100/50'
      )}
    >
      <button
        type="button"
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
      >
        {isLight ? <Sun size={15} /> : <Moon size={15} />}
      </button>
    </div>
  );
};

export default ThemeChanger;
