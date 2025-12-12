'use client';

import { useEffect, useState } from 'react';

import useModalState from '@/hooks/useModalState';
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
  const [isBack, setIsBack] = useState(false);
  const modalState = useModalState();
  const isEditing = useEditActionStore(state => state.isEditing);

  const handleCardClick = () => {
    if (isEditing || modalState.active) return;
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
      className={cn(
        'inline-grid rotate-y-0 transition-all duration-500 ease-in-out perspective-dramatic transform-3d',
        isBack && 'rotate-y-180',
        !isEditing && 'cursor-pointer'
      )}
      onClick={handleCardClick}
    >
      <FrontBingoCard item={item} firstBingoCardRef={firstBingoCardRef} />
      <BackBingoCard id={id} modalState={modalState} />
    </div>
  );
};

export default BingoCard;
