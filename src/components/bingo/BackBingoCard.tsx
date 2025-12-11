'use client';

import Image from 'next/image';

import { cn } from '@/lib/cn';
import { useBingoStore } from '@/store';
import { MONTH_KEY } from '@/utils/date';

import BingoImageCreateCard from './image/BingoImageCreateCard';
import BingoImageEditMenu from './image/BingoImageEditMenu';

interface BackBingoCardProps {
  id: string;
}
// 빙고 카드 뒷면 컴포넌트
const BackBingoCard = ({ id }: BackBingoCardProps) => {
  const bingoItems = useBingoStore(state => state.bingoByMonth[MONTH_KEY]);
  const item = bingoItems.find(item => item.id === id);
  const previewUrl = item?.image ?? null;

  return (
    <div
      className={cn(
        'border-text/25 bg-sub-background shadow-card dark:shadow-card-dark aspect-3/4',
        'rotate-y-180 [grid-area:1/1/1/1] backface-hidden',
        'flex items-center justify-center',
        previewUrl ? 'relative' : 'border'
      )}
    >
      <BingoImageCreateCard id={id} />
      {previewUrl && (
        <div className="absolute inset-0">
          <Image src={previewUrl} alt="preview" fill className="object-cover" />
        </div>
      )}
      {item && item.image && <BingoImageEditMenu />}
    </div>
  );
};

export default BackBingoCard;
