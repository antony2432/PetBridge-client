import { TrashIcon } from '@heroicons/react/24/outline';
import { SpeedDialAction, Typography } from '@material-tailwind/react';

import { labelProps } from '../labelProps';
import axios from 'axios';
export default function Eliminar({ idPet }: any) {
  
  console.log(idPet);
  const handleClickDelete = async () => {
    const response =   axios.delete(`${process.env.NEXT_PUBLIC_API_BACK}/animals/${idPet.id}`)
      .then(() => {
        console.log(response);
        alert('Animal eliminado con Exito!');
           
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

