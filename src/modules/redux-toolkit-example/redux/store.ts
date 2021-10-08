import { configureStore } from '@reduxjs/toolkit';
import { jsonDataSlice, mainSlice } from './';

// NOTE: this file is only one line smaller than the classic Redux example 
export const store = configureStore({
  reducer: {
    jsonDataReducer: jsonDataSlice.reducer,
    mainReducer: mainSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
