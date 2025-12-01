import ThemeChanger from '../button/ThemeChanger';
import BingoEditModal from '../modal/BingoEditModal';

const Separator = () => {
  return <div className="bg-text/60 h-[10px] w-px" />;
};

const HeaderNav = () => {
  return (
    <nav className="dark:text-text/60 mt-4 flex flex-wrap items-center justify-between gap-x-2 text-xs sm:mt-7 sm:text-sm">
      <div className="flex items-center gap-1.5">
        <button type="button">지난 빙고</button>
        <Separator />
        <button type="button">이미지 저장</button>
      </div>
      <div className="flex items-center gap-1.5">
        <button type="button">해핑고 사용법</button>
        <Separator />
        <BingoEditModal />
        <div className="flex items-center">
          <Separator />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
