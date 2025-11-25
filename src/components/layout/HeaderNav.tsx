import ThemeChanger from '../button/ThemeChanger';

const Separator = () => {
  return <div className="bg-text/60 h-[10px] w-px" />;
};

const HeaderNav = () => {
  return (
    <nav className="dark:text-text/60 mt-8 flex flex-wrap items-center justify-between gap-x-2 text-xs sm:text-sm">
      <div className="flex items-center gap-1">
        <span>0 BINGO</span>
        <Separator />
        <button type="button">지난 빙고</button>
        <Separator />
        <button type="button">이미지 저장</button>
      </div>
      <div className="flex items-center gap-1">
        <button type="button">해핑고 사용법</button>
        <Separator />
        <button type="button">빙고 편집</button>
        <div className="flex items-center">
          <Separator />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
