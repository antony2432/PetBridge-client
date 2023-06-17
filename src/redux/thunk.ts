import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const Filter = createAsyncThunk('categorias/Filter', async (obj: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/specie?specie=${obj.value}`,
  );
  obj = {
    ...obj,
    data: response.data,
  };
  return obj;
});

interface Obj {
  active: number;
  elements: number;
}

export const Paginatee = createAsyncThunk('categorias/Paginate', async (obj: Obj) => {
  console.log(obj);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,
  );
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});

export const GetByName = createAsyncThunk('user/Users', async () => {
  const response = await axios.get('https://deploy-petsbridge.vercel.app/users');

  return response.data;
});
export const UpdateById = createAsyncThunk('user/Updatebyid', async (obj: any) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/update/${obj.id}`,
    obj.file,
  );
  return response.data;
});
