'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/cn';
import { BingoItem, useEditActionStore } from '@/store';

import BackBingoCard from './BackBingoCard';
import FrontBingoCard from './FrontBingoCard';

interface BingoCardProps {
  item: BingoItem;
  firstBingoCardRef: React.RefObject<HTMLTextAreaElement> | undefined;
}

const BingoCard = ({ item, firstBingoCardRef }: BingoCardProps) => {
  const { id, image } = item;
  // TODO: cardRef 필요 여부 체크
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isBack, setIsBack] = useState(false);
  const isEditing = useEditActionStore(state => state.isEditing);

  const handleCardClick = () => {
    if (isEditing) return;
    setIsBack(prev => !prev);
  };

  useEffect(() => {
    if (isEditing || !image) {
      setIsBack(false);
    } else if (!isEditing && image) {
      setIsBack(true);
    }
  }, [isEditing, image]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'inline-grid rotate-y-0 transition-all duration-500 ease-in-out perspective-dramatic transform-3d',
        isBack && 'rotate-y-180',
        !isEditing && 'cursor-pointer'
      )}
      onClick={handleCardClick}
    >
      <FrontBingoCard item={item} firstBingoCardRef={firstBingoCardRef} />
      <BackBingoCard id={id} />
    </div>
  );
};

export default BingoCard;
