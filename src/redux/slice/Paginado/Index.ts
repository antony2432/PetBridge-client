import { createSlice } from '@reduxjs/toolkit';
import { Filter, Paginatee } from '@/redux/thunk';
const componentes: any = [];
const Filters: any = [];
const initialState = {
  componentes,
  Filters,
};
export const paginadoSlice = createSlice({
  name: 'paginado',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Paginatee.fulfilled, (state, action) => {
      state.componentes = [...action.payload];
    });
    builder.addCase(Filter.fulfilled, (state, action) => {
      state.Filters = [...action.payload];
    });
  },
});
export default paginadoSlice.reducer;
