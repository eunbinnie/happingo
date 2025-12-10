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
  startEditing: () =>
    set(state => ({ ...state, isEditing: true, isSaved: false })),
  stopEditing: () => set(state => ({ ...state, isEditing: false })),
  saveEditing: () => set(state => ({ ...state, isSaved: true })),
}));
