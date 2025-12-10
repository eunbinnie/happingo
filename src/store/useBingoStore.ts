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
  updateBingoText: (monthKey: string, id: string, text: string) => void; // 빙고 텍스트 업데이트
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
      updateBingoText: (monthKey: string, id: string, text: string) =>
        set(state => ({
          bingoByMonth: {
            ...state.bingoByMonth,
            [monthKey]: state.bingoByMonth[monthKey].map(item =>
              item.id === id ? { ...item, text } : item
            ),
          },
        })),
    }),
    { name: 'happingo-bingo' }
  )
);
