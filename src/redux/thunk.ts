import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  trueAlertC,
  falseAlertC,
  trueAlertA,
  falseAlertA,

} from '../components/Alerts/index';
export const Filter = createAsyncThunk('categorias/Filter', async (obj: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/filtro?filtro=${obj.value}`,
    {
      headers: {
        Authorization: `Bearer${obj.sesion?.token}`,
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
  sesion: any;
}

export const Paginatee = createAsyncThunk('paginado/Paginatee', async (obj: Obj) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/paginate?currentPage=${obj.active}&slicePage=${obj.elements}`,
    {
      headers: {
        authorization: `Bearer ${obj.sesion?.token}`,
      },
    },
  );
  const filter = response.data.filter((r: any) => r.name !== undefined);
  return filter;
});

export const GetByName = createAsyncThunk('user/Users', async (sesion: any) => {
  if (sesion?.token) {
    try {
      const { data } = await axios.get(
        sesion?.rol === 'fundation'
          ? `${process.env.NEXT_PUBLIC_API_BACK}/asociaciones/${sesion?.id}`
          : `${process.env.NEXT_PUBLIC_API_BACK}/users/${sesion?.id}`,
        {
          headers: {
            Authorization: `Bearer ${sesion?.token}`,
          },
        },
      );
      if (data) {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
});

export const setNull = createAsyncThunk('user/Users', async () => {
  return null;
});

export const UpdateById = createAsyncThunk('user/Updatebyid', async (obj: any) => {
  try {
    if (obj.sesion?.rol !== 'fundation') {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_BACK}/users/update/${obj.id}`, obj.file, {
        headers: {
          Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
          'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
        },
      });
    } else {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BACK}/asociaciones/update/${obj.id}`,
        obj.file,
        {
          headers: {
            Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
            'Content-Type': obj.tipe === 'obj' ? 'application/json' : 'multipart/form-data', // Establecer el tipo de contenido como JSON
          },
        },
      );
    }
    trueAlertA();
    const { data } = await axios.get(
      obj.sesion?.rol === 'fundation'
        ? `${process.env.NEXT_PUBLIC_API_BACK}/asociaciones/${obj.sesion?.id}`
        : `${process.env.NEXT_PUBLIC_API_BACK}/users/${obj.sesion?.id}`,
      {
        headers: {
          Authorization: `Bearer ${obj.sesion?.token}`,
        },
      },
    );

    return data;
  } catch {
    falseAlertA();
  }
});
export const UpdateEmail = createAsyncThunk('user/Update', async (obj: any) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BACK}/${obj.sesion?.rol === 'user' ? 'users' : 'asociaciones'
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
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_BACK}/${obj.sesion?.rol === 'user' ? 'users' : 'asociaciones'
      }/change-password`,
      obj.data,
      {
        headers: {
          Authorization: `Bearer ${obj.sesion?.token}`, // Agregar el token como encabezado de autorización
          'Content-Type': 'application/json', // Establecer el tipo de contenido como JSON
        },
      },
    );
    console.log(response.data);
    trueAlertC();
    obj.signoffSesion();
    obj.handleOff();
  } catch {
    falseAlertC();
  }
});
export const SearchA = createAsyncThunk('paginado/SearchA', async (obj:any) =>{
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACK}/animals/search?name=${obj.value}`, {
      headers:{
        Autorization:`Bearer ${obj.sesion?.token}`,
      },
    },
  );
  return response.data;
});
