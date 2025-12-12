'use client';

import { useEffect, useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useBingoStore } from '@/store';
import { MONTH_KEY } from '@/utils/date';

import BingoCard from './BingoCard';
import BingoEditActions from './BingoEditActions';

const BingoBoard = () => {
  const firstBingoCardRef = useRef<HTMLTextAreaElement>(null);
  const { ensureMonthBingo, bingoItems } = useBingoStore(
    useShallow(state => ({
      ensureMonthBingo: state.ensureMonthBingo,
      bingoItems: state.bingoByMonth[MONTH_KEY] ?? [],
    }))
  );

  const handleFocusFirstBingo = () => {
    firstBingoCardRef.current?.focus();
  };

  useEffect(() => {
    ensureMonthBingo(MONTH_KEY);
  }, [ensureMonthBingo]);

  return (
    <>
      <section className="mt-5 w-full sm:mt-8">
        <div className="mx-2 flex items-center justify-between">
          <p className="text-2xs dark:text-text/60 sm:text-xs">
            현재 <span className="font-semibold">0 BINGO</span>
          </p>
          <BingoEditActions onFocusFirstBingoCard={handleFocusFirstBingo} />
        </div>

        <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-2">
          {bingoItems.map((item, index) => (
            <BingoCard
              key={item.id}
              item={item}
              firstBingoCardRef={index === 0 ? firstBingoCardRef : undefined}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default BingoBoard;
