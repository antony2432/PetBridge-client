import { createSlice } from '@reduxjs/toolkit';
import { Filter, Paginatee, SearchA } from '@/redux/thunk';
const componentes: any = [];
const componentesOrigin: any = [];
const Filters: any = [];
let initialState = {
  componentes,
  componentesOrigin,
  Filters,
};
export const paginadoSlice = createSlice({
  name: 'paginado',
  initialState,
  reducers: {
    reset:(state)=>{
      state.componentes = [...state.componentesOrigin];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Paginatee.fulfilled, (state, action) => {
      console.log('esto', action.payload);
      state.componentes = [...action.payload];
      state.componentesOrigin = [...action.payload];
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
    builder.addCase(SearchA.fulfilled, (state, action)=>{
      state.Filters = [...action.payload];
    });
  },
});
export default paginadoSlice.reducer;
export const { reset } = paginadoSlice.actions;
