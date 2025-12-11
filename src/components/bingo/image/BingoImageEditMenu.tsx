import { EllipsisVertical } from 'lucide-react';

const BingoImageEditMenu = () => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="absolute top-0 right-0 flex size-7 items-center justify-center p-2 md:size-8"
    >
      <EllipsisVertical
        color="#fff"
        className="drop-shadow-icon-strong transition-all duration-300"
      />
    </div>
  );
};

export default BingoImageEditMenu;
