'use client';

import { BingoItem, useBingoStore } from '@/store';

import BingoCard from './BingoCard';
import BingoEditActions from './BingoEditActions';

const BingoBoard = () => {
  const bingoItems = useBingoStore(state => state.bingo);

  return (
    <section className="mt-5 w-full sm:mt-8">
      <div className="mx-2 flex items-center justify-between">
        <p className="text-2xs dark:text-text/60 sm:text-xs">
          현재 <span className="font-semibold">0 BINGO</span>
        </p>
        <BingoEditActions />
      </div>

      <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-2">
        {bingoItems.map((item: BingoItem) => (
          <BingoCard
            key={item.id}
            id={`bingo-card-${item.id}`}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default BingoBoard;
