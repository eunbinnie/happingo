'use client';

import { useRef } from 'react';

import BackBingoCard from './BackBingoCard';
import FrontBingoCard from './FrontBingoCard';

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
      <FrontBingoCard text={text} />
      <BackBingoCard id={id} />
    </div>
  );
};

export default BingoCard;
