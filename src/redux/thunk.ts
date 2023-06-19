import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import useUserSesion from '@/hook/userSesion';

export const Filter = createAsyncThunk('categorias/Filter', async (obj: any) => {
  const { sesion } = useUserSesion();
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/specie?specie=${obj.value}`, {
      headers: {
        authorization: `Bearer ${sesion?.token}`,
      },
    });
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
  
export const Paginatee = createAsyncThunk('paginado/Paginatee', async (obj: Obj) => {
  const { sesion } = useUserSesion();
  console.log(sesion);
  console.log('hola', obj);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`, {
      headers: {
        authorization: `Bearer ${sesion?.token}`,
      },
    });
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});
