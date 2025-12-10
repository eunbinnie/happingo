import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { getCurrentMonthKey } from '@/utils/date';

export interface BingoItem {
  id: string;
  text: string;
  image: string | null;
}

type BingoByMonth = {
  [monthKey: string]: BingoItem[];
};

export interface BingoStore {
  bingoByMonth: BingoByMonth;
}

const initialBingo = (): BingoItem[] =>
  Array.from({ length: 9 }, (_, index) => ({
    id: `bingo-card-${index + 1}`,
    text: '',
    image: null,
  }));

export const useBingoStore = create<BingoStore>()(
  persist(
    (set, get) => ({
      bingoByMonth: {
        [getCurrentMonthKey()]: initialBingo(),
      },
    }),
    { name: 'happingo-bingo' }
  )
);
