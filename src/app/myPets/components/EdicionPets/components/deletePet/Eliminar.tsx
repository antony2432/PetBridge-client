import { TrashIcon } from '@heroicons/react/24/outline';
import { SpeedDialAction, Typography } from '@material-tailwind/react';

import { labelProps } from '../labelProps';
import axios from 'axios';
import useUserSesion from '@/hook/userSesion';

export default function Eliminar({ idPet }: any) {
 
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGk5N3JhZ2dpb2FAZ21haWwuY29tIiwibmFtZU9mRm91bmRhdGlvbiI6IkRvZ2dpcyIsImltYWdlIjpudWxsLCJkYXRlU3RhcnQiOm51bGwsImRlc2NyaXB0aW9uIjpudWxsLCJwaG9uZSI6bnVsbCwiY291bnRyeSI6bnVsbCwiYWRkcmVzcyI6bnVsbCwicmVzZXQiOm51bGwsInJvbCI6ImZ1bmRhdGlvbiIsInN1YiI6IjY2ZDQ2N2Y5LTEwZTktNDdhNi04YzU3LTk5ZmM0Y2ZmMWVhOCIsImlhdCI6MTY4NzAzNTUxMSwiZXhwIjoxNjg3MTIxOTExfQ.2L2mbQO2dJrYbp-WfT5yGpi31JBa-9TNcMWqV-v9tCE';
  
  const { sesion } = useUserSesion();
  console.log(sesion);
  const handleClickDelete = async () => {
    const response =   axios.delete(`${process.env.NEXT_PUBLIC_API_BACK}/animals/${idPet.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log(response);
        alert('Animal eliminado con Exito!');
        location.reload();
           
      })
      .catch(error => {
        console.log(error);
        console.log('chau');// Manejar el error de alguna manera
      });
  };
  return (
    <SpeedDialAction className="relative" >
              <TrashIcon className="h-5 w-5" onClick={handleClickDelete} />
              <Typography {...labelProps} onClick={handleClickDelete}> <p className='bg-black text-white rounded-xl'>Eliminar</p></Typography>
            </SpeedDialAction>
  );
}

