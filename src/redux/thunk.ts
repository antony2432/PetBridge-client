import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import useUserSesion from '@/hook/userSesion';


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

export const GetByName = createAsyncThunk('user/Users', async (id: any) => {
  const response = await axios.get(`https://deploy-petsbridge.vercel.app/users/${id}`);
  console.log(response.data);

  return response.data;
});
export const UpdateById = createAsyncThunk('user/Updatebyid', async (obj: any) => {
  const { sesion } = useUserSesion();
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/update/${obj.id}`,
    obj.file,
    {
      headers: {
        Authorization: `Bearer ${sesion?.token}`, // Agregar el token como encabezado de autorización
        'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
  return response.data;
});
export const UpdateEmail = createAsyncThunk('user/Update', async (obj : any) => {
  const { sesion } = useUserSesion();
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/change-email`,
    obj,
    {
      headers: {
        Authorization: `Bearer ${sesion?.token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
});
export const UpdatePassword = createAsyncThunk('user/Update', async (obj : any) => {
  const { sesion } = useUserSesion();
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/change-password`,
    obj,
    {
      headers: {
        Authorization: `Bearer ${sesion?.token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
});