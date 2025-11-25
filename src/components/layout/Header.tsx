import Link from 'next/link';

import Logo from '@/assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="mt-5 px-3">
      <div className="text-2xs flex items-center justify-between">
        <span>2025</span>
        <p>
          매달 나만의 행복 미션 빙고 ㅡ <strong>해핑고</strong>
        </p>
        <span>11</span>
      </div>
      <div className="mt-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
