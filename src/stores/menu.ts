import { create } from 'zustand';

interface MenuStore {
  menu: 'tools' | 'styling';
  actions: {
    updateViewMenu: (menu: 'tools' | 'styling') => void;
  };
}

export const useMenu = create<MenuStore>((set) => ({
  menu: 'tools',
  actions: {
    updateViewMenu: (menu) =>
      set(() => ({
        menu: menu,
      })),
  },
}));
