import { ImageUp } from 'lucide-react';

import { cn } from '@/lib/cn';

interface BackBingoCardProps {
  id: string;
}
// 빙고 카드 뒷면 컴포넌트
const BackBingoCard = ({ id }: BackBingoCardProps) => {
  return (
    <div
      className={cn(
        'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark aspect-3/4 border',
        'rotate-y-180 [grid-area:1/1/1/1] backface-hidden',
        'flex items-center justify-center'
      )}
    >
      <label
        htmlFor={id}
        className="border-text/25 flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed p-1 sm:gap-2"
      >
        <div className="flex size-4 items-center justify-center sm:size-6">
          <ImageUp />
        </div>
        <span className="text-2xs sm:text-xs">사진 추가하기</span>
      </label>
      <input id={id} type="file" accept="image/*" className="hidden" />
    </div>
  );
};

export default BackBingoCard;
