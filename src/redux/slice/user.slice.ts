import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IUser {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
  country: string | null;
  phone: string | null;
}

const initialState: IUser = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  image: null,
  country: null,
  phone: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        id,
        firstName = null,
        lastName = null,
        email,
        image = null,
        country = null,
        phone = null,
      } = action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.image = image;
      state.country = country;
      state.phone = phone;
    },
    removeUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.userSlice;
export default userSlice.reducer;
