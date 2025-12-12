import { create } from 'zustand';

type EditResult = 'idle' | 'saved' | 'cancelled';

interface EditActionState {
  isEditing: boolean; // 편집 모드 여부
  result: EditResult; // 편집 결과 여부
  isImageMenuOpen: boolean; // 이미지 드롭다운 메뉴 오픈 여부
  startEditing: () => void;
  finishEditing: (result: Exclude<EditResult, 'idle'>) => void;
  resetResult: () => void;
  openImageMenu: () => void;
  closeImageMenu: () => void;
}

export const useEditActionStore = create<EditActionState>(set => ({
  isEditing: false,
  result: 'idle',
  isImageMenuOpen: false,

  startEditing: () => set({ isEditing: true, result: 'idle' }),

  finishEditing: result => set({ isEditing: false, result }),

  resetResult: () => set({ result: 'idle' }),

  openImageMenu: () => set({ isImageMenuOpen: true }),

  closeImageMenu: () => set({ isImageMenuOpen: false }),
}));
