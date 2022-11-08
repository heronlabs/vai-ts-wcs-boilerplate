import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Languages} from '../../core/enums/languages';

export type LocaleStore = {
  currentLanguage: Languages;
};

const initialState: LocaleStore = {
  currentLanguage: Languages.PT_BR,
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLanguage: (
      state: LocaleStore,
      {payload: locale}: PayloadAction<Languages>
    ) => {
      state.currentLanguage = locale;
    },
  },
});

export const {changeLanguage} = localeSlice.actions;

export default localeSlice.reducer;
