import { create } from 'zustand';

export interface EditActionState {
  isEditing: boolean;
  isSaved: boolean;
  isCancelled: boolean;
  startEditing: () => void;
  stopEditing: () => void;
  saveEditing: () => void;
  cancelEditing: () => void;
}

const initialState = {
  isEditing: false,
  isSaved: false,
  isCancelled: false,
};

export const useEditActionStore = create<EditActionState>()(set => ({
  ...initialState,
  startEditing: () =>
    set(state => ({ ...state, isEditing: true, isSaved: false })),
  stopEditing: () => set(state => ({ ...state, isEditing: false })),
  saveEditing: () => set(state => ({ ...state, isSaved: true })),
  cancelEditing: () => set(state => ({ ...state, isCancelled: true })),
}));
