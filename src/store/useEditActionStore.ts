import { create } from 'zustand';

export interface EditActionState {
  isEditing: boolean;
  isSaved: boolean;
  startEditing: () => void;
  stopEditing: () => void;
  saveEditing: () => void;
}

const initialState = {
  isEditing: false,
  isSaved: false,
};

export const useEditActionStore = create<EditActionState>()(set => ({
  ...initialState,
  startEditing: () => set({ ...initialState, isEditing: true, isSaved: false }),
  stopEditing: () => set({ ...initialState, isEditing: false }),
  saveEditing: () => set({ ...initialState, isSaved: true }),
}));
