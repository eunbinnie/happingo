import { ImageUp } from 'lucide-react';

import BingoImageInput from './BingoImageInput';

interface BingoImageCreateCardProps {
  id: string;
}

const BingoImageCreateCard = ({ id }: BingoImageCreateCardProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="border-text/25 flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed p-1 sm:gap-2"
      >
        <div className="flex size-4 items-center justify-center sm:size-6">
          <ImageUp />
        </div>
        <span className="text-2xs sm:text-xs">사진 추가하기</span>
      </label>
      <BingoImageInput id={id} />
    </>
  );
};

export default BingoImageCreateCard;
