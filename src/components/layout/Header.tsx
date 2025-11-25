import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';

const Header = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const monthLabel = String(month).padStart(2, '0'); // 월 01, 02, 03 형식으로 표시

  return (
    <header className="mt-5 px-3">
      <div className="text-2xs flex items-center justify-between sm:text-xs">
        <span>{year}</span>
        <p>
          매달 나만의 행복 미션 빙고 ㅡ <strong>해핑고</strong>
        </p>
        <span>{monthLabel}</span>
      </div>
      <div className="mt-2">
        <Link href="/" aria-label="해핑고 홈">
          <Logo className="text-text" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
