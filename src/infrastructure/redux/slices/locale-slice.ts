import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Languages} from '../../i18n/enums/languages';

export type LocaleStore = {
  currentLanguage: Languages;
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    currentLanguage: Languages.PT_BR,
  },
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

export const localeSliceReducer = localeSlice.reducer;
