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
  ensureMonthBingo: (monthKey: string) => void; // 월별 빙고 카드 초기화
}

const initialBingo = (): BingoItem[] =>
  Array.from({ length: 9 }, (_, index) => ({
    id: `bingo-card-${index + 1}`,
    text: '',
    image: null,
  }));

export const useBingoStore = create<BingoStore>()(
  persist(
    set => ({
      bingoByMonth: {
        [getCurrentMonthKey()]: initialBingo(),
      },
      ensureMonthBingo: monthKey =>
        set(state => {
          if (state.bingoByMonth[monthKey]) return state;

          return {
            bingoByMonth: {
              ...state.bingoByMonth,
              [monthKey]: initialBingo(),
            },
          };
        }),
    }),
    { name: 'happingo-bingo' }
  )
);
