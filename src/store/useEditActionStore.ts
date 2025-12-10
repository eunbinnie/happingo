import { create } from 'zustand';

type EditResult = 'idle' | 'saved' | 'cancelled';

interface EditActionState {
  isEditing: boolean; // 편집 모드 여부
  result: EditResult; // 편집 결과 여부
  startEditing: () => void;
  finishEditing: (result: Exclude<EditResult, 'idle'>) => void;
  resetResult: () => void;
}

export const useEditActionStore = create<EditActionState>(set => ({
  isEditing: false,
  result: 'idle',

  startEditing: () => set({ isEditing: true, result: 'idle' }),

  finishEditing: result => set({ isEditing: false, result }),

  resetResult: () => set({ result: 'idle' }),
}));
