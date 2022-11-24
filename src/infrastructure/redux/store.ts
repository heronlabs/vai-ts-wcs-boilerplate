import {configureStore} from '@reduxjs/toolkit';

import {localeSliceReducer} from './slices/locale-slice';

export const store = configureStore({
  reducer: {
    locale: localeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
