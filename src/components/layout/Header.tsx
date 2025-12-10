import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';
import { TODAY_MONTH_2DIGIT, TODAY_YEAR } from '@/constants/dateConstants';

import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="px-3">
      <div className="text-2xs dark:text-text/60 flex flex-col font-light sm:text-xs">
        <span>
          {TODAY_YEAR} · {TODAY_MONTH_2DIGIT}
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
