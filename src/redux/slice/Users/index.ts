import { createSlice } from '@reduxjs/toolkit';
import { GetByName, UpdateById } from '@/redux/thunk';
let User: any = null;
let initialState = {
  User,
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNull: (state) => {
      state.User = null ;
    } },
  extraReducers: (builder) => {
    builder.addCase(GetByName.fulfilled, (state, { payload }) => {
      state.User = payload;
    });
    builder.addCase(UpdateById.fulfilled, (state, { payload }) => {
      state.User = payload;
    });
  },
});
export default usersSlice.reducer;
