import { createSlice } from '@reduxjs/toolkit';
import { GetByName, UpdateById } from '@/redux/thunk';
const User: any = [];
let initialState = {
  User,
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetByName.fulfilled, (state, action) => {
      state.User = [...action.payload];
    });
    builder.addCase(UpdateById.fulfilled, (state, { payload }) => {
      state.User = [...payload];
    });
  },
});
export default usersSlice.reducer;
