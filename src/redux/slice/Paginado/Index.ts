import { createSlice } from '@reduxjs/toolkit';
import { Paginate } from '../../thunk';
let initialState = {
  componentes: [],
};
export const categoriasSlice = createSlice({
  name: 'paginado',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Paginate.fulfilled, (state, action) => {
      state.componentes = action.payload;
      console.log(action.payload);
    });
  },
  reducers: {},
});
export default categoriasSlice.reducer;
