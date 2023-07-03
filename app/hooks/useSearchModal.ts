import { create } from 'zustand';
import React from 'react';

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useSearchModal = create<LoginModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
}));

export default useSearchModal;