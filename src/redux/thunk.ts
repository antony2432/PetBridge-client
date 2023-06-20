import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const Filter = createAsyncThunk('categorias/Filter', async (obj: any) => {
  
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/filtro?filtro=${obj.value}`, {
      headers: {
        authorization: `Bearer ${obj.sesion?.token}`,
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
  sesion:any;
}
  
export const Paginatee = createAsyncThunk('paginado/Paginatee', async (obj: Obj) => {
 
  
  
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`, {
      headers: {
        authorization: `Bearer ${obj.sesion?.token}`,
      },
    });
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});
