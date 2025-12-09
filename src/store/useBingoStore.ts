import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface BingoItem {
  id: string;
  text: string;
  image: string | null;
}

export interface BingoStore {
  bingo: BingoItem[];
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
      bingo: initialBingo(),
    }),
    { name: 'happingo-bingo' }
  )
);
