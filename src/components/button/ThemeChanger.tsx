'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import useMounted from '@/hooks/useMounted';
import { cn } from '@/lib/cn';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  // 마운트되기 전에는 스켈레톤 UI 렌더링 (hydration 에러 방지)
  if (!mounted) {
    return (
      <div className="bg-skeleton ml-1.5 size-[22px] animate-pulse rounded-full" />
    );
  }

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
