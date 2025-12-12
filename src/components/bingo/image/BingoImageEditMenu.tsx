import { EllipsisVertical } from 'lucide-react';

import { ImodalState } from '@/hooks/useModalState';

import ImageCardMenu from './ImageCardMenu';

const BingoImageEditMenu = ({
  active,
  handleModalClose,
  handleModalOpen,
}: ImodalState) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    handleModalOpen();
  };

  return (
    <div className="absolute top-0 right-0">
      <div
        onClick={handleClick}
        className="flex size-7 items-center justify-center p-2 md:size-8"
      >
        <EllipsisVertical
          color="#fff"
          className="drop-shadow-icon-strong transition-all duration-300"
        />
      </div>
      <ImageCardMenu active={active} onClose={handleModalClose} />
    </div>
  );
};

export default BingoImageEditMenu;
