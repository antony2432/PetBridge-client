import  useUserSesion  from '@/hook/userSesion';

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJGZXJuYW5kbyIsImxhc3ROYW1lIjoiRmFudGluaSIsImVtYWlsIjoiZmVybmFuZG9qb3NlZmFudGluaTcuMEBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwiY291bnRyeSI6bnVsbCwicGhvbmUiOm51bGwsInJvbCI6InVzZXIiLCJyZXNldCI6bnVsbCwibmV3RW1haWwiOm51bGwsInN1YiI6ImIwYWQ4NTgxLWE2YzktNDRhNy04YjE5LTk5YmY0NWZmMWVjOSIsImlhdCI6MTY4NzIwNjIxNCwiZXhwIjoxNjg3MjkyNjE0fQ.aAF3qunlomBU2nL7hzKZD8cNkqcEquj_Tjtxmq4b22M';

export const Filter = createAsyncThunk('paginado/Filter', async (obj: any) => {
  const { sesion } = useUserSesion();
  console.log(sesion);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/specie?specie=${obj.value}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
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

export const Paginatee = createAsyncThunk('paginado/Paginate', async (obj: Obj) => {
  console.log(obj);

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});

export const GetByName = createAsyncThunk('user/Users', async (id: any) => {
  const response = await axios.get(`https://deploy-petsbridge.vercel.app/users/${id}`);
  console.log(response.data);

  return response.data;
});
export const UpdateById = createAsyncThunk('user/Updatebyid', async (obj: any) => {

  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/update/${obj.id}`,
    obj.file,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token como encabezado de autorización
        'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
  return response.data;
});
export const UpdateEmail = createAsyncThunk('user/Update', async (obj: any) => {
 
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/change-email`,
    obj,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
});

export const UpdatePassword = createAsyncThunk('user/Update', async (obj: any) => {
 
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/users/change-password`,
    obj,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  console.log(response.data);
});
