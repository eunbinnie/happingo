import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';

import HeaderNav from './HeaderNav';

const Header = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const monthLabel = String(month).padStart(2, '0'); // 월 01, 02, 03 형식으로 표시

  return (
    <header className="px-3">
      <div className="text-2xs dark:text-text/60 flex flex-col font-light sm:text-xs">
        <span>
          {year} · {monthLabel}
        </span>
        <p className="text-center">
          매달 나만의 행복 미션 빙고 ㅡ{' '}
          <strong className="font-medium">해핑고</strong>
        </p>
      </div>
      <div className="mt-2">
        <Link href="/" aria-label="해핑고 홈">
          <Logo className="text-text" />
        </Link>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
