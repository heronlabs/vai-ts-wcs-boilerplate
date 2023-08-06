import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MenuNames} from '../../../core/enums/menu-names';

export type MenuStore = {
  open: boolean;
  currentPage: MenuNames;
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
    currentPage: MenuNames.INDEX,
  },
  reducers: {
    toggleMenu: (state: MenuStore) => {
      state.open = !state.open;
    },
    closeMenu: (state: MenuStore) => {
      state.open = false;
    },
    goToPage: (
      state: MenuStore,
      {payload: menuItemName}: PayloadAction<MenuNames>
    ) => {
      state.currentPage = menuItemName;
      state.open = false;
    },
  },
});

export const {goToPage, toggleMenu} = menuSlice.actions;

export const menuSliceReducer = menuSlice.reducer;
