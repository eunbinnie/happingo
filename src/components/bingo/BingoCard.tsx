'use client';

import { ImageUp } from 'lucide-react';
import { useRef } from 'react';

import { cn } from '@/lib/cn';

interface BingoCardProps {
  id: string;
  text: string;
}

const BingoCard = ({ id, text }: BingoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    cardRef.current?.classList.toggle('rotate-y-180');
  };

  return (
    <div
      ref={cardRef}
      className="inline-grid rotate-y-0 cursor-pointer transition-all duration-500 ease-in-out perspective-dramatic transform-3d"
      onClick={handleCardClick}
    >
      {/* 카드 앞면 */}
      <div
        className={cn(
          'text-text/60 flex aspect-3/4 items-center justify-center px-1.5 text-center text-xs font-medium break-keep sm:px-3 sm:text-sm',
          'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark border',
          '[grid-area:1/1/1/1] backface-hidden'
        )}
      >
        {text}
      </div>
      {/* 카드 뒷면 */}
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
    </div>
  );
};

export default BingoCard;
