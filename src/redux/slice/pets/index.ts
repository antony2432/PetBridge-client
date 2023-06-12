import { createSlice } from '@reduxjs/toolkit';

export const petsSlice = createSlice({
  name: 'datallePet',
  initialState: {
    open: false,
    allPets: [],
    pet: {},
  },
  reducers: {
    setAllPets: (state, action) => {
      state.allPets = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setAllPets, setOpen } = petsSlice.actions;
export default petsSlice.reducer;
