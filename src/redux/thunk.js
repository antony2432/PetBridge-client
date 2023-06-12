import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const Filter = createAsyncThunk('categorias/Filter', async (categoria) => {
  // eslint-disable-next-line @typescript-eslint/quotes
  const response = await axios.get(`${process.env.API_BACK}/animals/specie?specie=${categoria}`);
  return response.data;
});
export const Paginatee = createAsyncThunk('categorias/Paginate', async (obj) => {
  console.log(obj);
  const response = await axios.get(
    `${process.env.API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,
  );
 const filter=response.data.filter(r=> r.name !== undefined);
 return filter
});
