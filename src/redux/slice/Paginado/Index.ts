import { createSlice } from '@reduxjs/toolkit';
import { Filter, Paginatee } from '@/redux/thunk';
const componentes: any = [];
const Filters: any = [];
let initialState = {
  componentes,
  Filters,
};
export const paginadoSlice = createSlice({
  name: 'paginado',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Paginatee.fulfilled, (state, action) => {
      console.log('esto', action.payload);
      state.componentes = [...action.payload];
    });
    builder.addCase(Filter.fulfilled, (state, { payload }) => {
      if (payload.checked) {
        state.Filters = [...state.Filters, ...payload.data];
      } else {
        const filter = [...state.Filters];
        console.log(filter);
        const filter2 = filter.filter((f: any) => f.specie !== payload.value);
        state.Filters = filter2;
      }
    });
  },
});
export default paginadoSlice.reducer;
