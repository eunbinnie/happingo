import { create } from 'zustand';

export interface EditActionState {
  isEditing: boolean;
  startEditing: () => void;
  stopEditing: () => void;
}

const initialState = {
  isEditing: false,
};

export const useEditActionStore = create<EditActionState>()(set => ({
  ...initialState,
  startEditing: () => set({ ...initialState, isEditing: true }),
  stopEditing: () => set({ ...initialState, isEditing: false }),
}));
