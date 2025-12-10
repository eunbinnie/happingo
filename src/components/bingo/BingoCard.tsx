'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/cn';
import { BingoItem, useEditActionStore } from '@/store';

import BackBingoCard from './BackBingoCard';
import FrontBingoCard from './FrontBingoCard';

interface BingoCardProps {
  item: BingoItem;
  firstBingoCardRef: React.RefObject<HTMLTextAreaElement> | undefined;
}

const BingoCard = ({ item, firstBingoCardRef }: BingoCardProps) => {
  const { id, text, image } = item;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isEditing = useEditActionStore(state => state.isEditing);

  const handleCardClick = () => {
    // 편집 모드이면 클릭 이벤트 무시
    if (isEditing) return;

    cardRef.current?.classList.toggle('rotate-y-180');
  };

  useEffect(() => {
    // 현재 카드 뒷면을 보여주고 있는지
    const isBackFace = cardRef.current?.classList.contains('rotate-y-180');

    // 편집 모드이고 카드 뒷면을 보여주고 있으면 앞면으로 전환
    if (isEditing && isBackFace) {
      cardRef.current?.classList.remove('rotate-y-180');
    }

    // 편집 모드가 아니고 이미지가 있으면 뒷면으로 전환
    if (!isEditing && image) {
      cardRef.current?.classList.add('rotate-y-180');
    }
  }, [isEditing, image]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'inline-grid rotate-y-0 transition-all duration-500 ease-in-out perspective-dramatic transform-3d',
        !isEditing && 'cursor-pointer'
      )}
      onClick={handleCardClick}
    >
      <FrontBingoCard text={text} firstBingoCardRef={firstBingoCardRef} />
      <BackBingoCard id={id} />
    </div>
  );
};

export default BingoCard;
