import { createSlice } from '@reduxjs/toolkit';
import { Filter } from '../thunk';
import { getCategories } from '../thunk';
let initialState = {
  categorias: [],
};

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Filter.fulfilled, (state, action) => {
      state.categorias = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categorias = action.payload;
    });
  },
  reducers:{

  },
});
export default categoriasSlice.reducer;
