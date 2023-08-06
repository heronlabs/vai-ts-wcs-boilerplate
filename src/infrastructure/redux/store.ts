import {configureStore} from '@reduxjs/toolkit';

import {localeSliceReducer} from './slices/locale-slice';
import {menuSliceReducer} from './slices/menu-slice';

export const store = configureStore({
  reducer: {
    locale: localeSliceReducer,
    menu: menuSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
