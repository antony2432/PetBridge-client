import { reviewsSlice } from './slice/Reviews/index';
import { paginadoSlice } from './slice/Paginado/Index';
import { configureStore } from '@reduxjs/toolkit';
import pets from './slice/pets';
import userSlice from './slice/user.slice';
import { usersSlice } from './slice/Users';

export const store = configureStore({
  reducer: {
    pets,
    paginado: paginadoSlice.reducer,
    user: usersSlice.reducer,
    reviews: reviewsSlice.reducer,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
