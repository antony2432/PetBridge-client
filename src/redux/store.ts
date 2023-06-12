import { configureStore } from '@reduxjs/toolkit';
import pets from './slice/pets';
import { paginadoSlice } from './Paginado/Index';
export const store = configureStore({
  reducer: {
    pets,
    paginado: paginadoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
