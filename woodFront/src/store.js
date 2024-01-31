import create from 'zustand';

export const useIsUpdateHashMemo = create((set) => ({
  isUpdate: false,
  setIsUpdate: () => set((state) => ({ isUpdate: !state.isUpdate })),
}));