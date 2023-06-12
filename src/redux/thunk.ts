import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const Filter = createAsyncThunk('categorias/Filter', async (categoria: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/specie?specie=${categoria}`,
  );
  return response.data;
});

interface Obj {
  active: string;
  elements: string;
}

export const Paginatee = createAsyncThunk('categorias/Paginate', async (obj: Obj) => {
  console.log(obj);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,
  );
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});
