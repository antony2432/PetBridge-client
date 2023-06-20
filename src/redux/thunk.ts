import useUserSesion from '@/hook/userSesion';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { trueAlertC, falseAlertC, trueAlertA, falseAlertA } from '../components/Alerts/index';
export const Filter = createAsyncThunk('categorias/Filter', async (obj: any) => {
  const { sesion } = useUserSesion();
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/filtro?filtro=${obj.value}`,
    {
      headers: {
        authorization: `Bearer ${sesion?.token}`,
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

export const Paginatee = createAsyncThunk('paginado/Paginatee', async (obj: Obj) => {
  const { sesion } = useUserSesion();
  console.log(sesion);
  console.log('hola', obj);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,
    {
      headers: {
        authorization: `Bearer ${sesion?.token}`,
      },
    },
  );
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});

export const GetByName = createAsyncThunk('user/Users', async (sesion: any) => {
  const response = await axios.get(
    sesion?.rol === 'user'
      ? `https://deploy-petsbridge.vercel.app/users/${sesion?.id}`
      : `https://deploy-petsbridge.vercel.app/asociaciones/${sesion?.id}`,
  );
  console.log(response.data);

  return response.data;
});
export const UpdateById = createAsyncThunk('user/Updatebyid', async (obj: any) => {
  try {
    const response =
      obj.sesion?.rol === 'user'
        ? await axios.patch(
          `${process.env.NEXT_PUBLIC_API_BACK}/users/update/${obj.id}`,
          obj.file,
          {
            headers: {
              Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
              'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
            },
          },
        )
        : await axios.put(
          `${process.env.NEXT_PUBLIC_API_BACK}/asociaciones/update/${obj.id}`,
          obj.file,
          {
            headers: {
              Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
              'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
            },
          },
        );
    trueAlertA();
    return response.data;
  } catch {
    falseAlertA();
  }
});
export const UpdateEmail = createAsyncThunk('user/Update', async (obj: any) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/${
      obj.sesion?.rol === 'user' ? 'users' : 'asociaciones'
    }/change-email`,
    obj.data,
    {
      headers: {
        Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  if (response.data.status >= 400) {
    return falseAlertC();
  }
  console.log(response.data);
  trueAlertC();
  obj.signoffSesion();
  obj.handleOff();
});

export const UpdatePassword = createAsyncThunk('user/Update', async (obj: any) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/${
      obj.sesion?.rol === 'user' ? 'users' : 'asociaciones'
    }/change-password`,
    obj.data,
    {
      headers: {
        Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
        'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
      },
    },
  );
  if (response.data.status >= 400) {
    return falseAlertC();
  }
  console.log(response.data);
  trueAlertC();
  obj.signoffSesion();
  obj.handleOff();
});
