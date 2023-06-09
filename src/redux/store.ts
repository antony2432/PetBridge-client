import { configureStore } from '@reduxjs/toolkit';
import pets from './slice/pets';
import { categoriasSlice } from './categorias/Index';
export const store = configureStore({
  reducer: {
    pets,
    categorias: categoriasSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
