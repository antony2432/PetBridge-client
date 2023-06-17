import { ErrorMessage, Field } from 'formik';
import React from 'react';
export default function Input({ name, types }: any) {
  return (
    <>
      {name === 'email' ? (
        <Field
          name={name}
          type={types}
          className="rounded border border-[#ffd499] bg-blue-gray-50 pl-3 h-10 w-2/3"
          disabled
        ></Field>
      ) : (
        <div className='flex flex-col w-2/3 items-end'>
             <span className='text-deep-orange-700'><ErrorMessage name={name}></ErrorMessage></span>
        <Field
          name={name}
          type={types}
          className="rounded border border-[#ffd499] pl-3 h-10 w-full"
        ></Field>
        </div>

      )}
      
    </>
  );
}
/*   Nombres: 'Juan Ezequiel',
  Apellidos: 'Marandino',
  imagen: '/image/Foto_Perfil_.jpg',
  genero: 'Male',
  email: 'juan@gmail.com',
  direccion: 'fugio-440',
  numeroTelefonico: '3452112', */
