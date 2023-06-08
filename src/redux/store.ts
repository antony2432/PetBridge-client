import { configureStore } from '@reduxjs/toolkit';
import pets from './slice/pets';
export const store = configureStore({
  reducer: {
    pets,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
