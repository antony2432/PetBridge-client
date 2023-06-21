'use client';
import React from 'react';
import Input from './Input';
import { Form, Formik } from 'formik';
import { validate } from '@/app/profile/validations';
import { Spinner } from '@material-tailwind/react';
import { useAppDispatch } from '@/redux/hook';
import { UpdateById } from '@/redux/thunk';
import useUserSesion from '@/hook/userSesion';

export default function InfoGeneral({ User, rol }: any) {
  const { sesion } = useUserSesion();
  const dispatch = useAppDispatch();

  const Guardar = (value: any) => {
    if (
      User.country === value.direccion &&
      User.phone === value.numeroTelefonico &&
      User.firstName === value.Nombres &&
      User.lastName === value.Apellidos
    ) {
      return alert('Haz un cambio para actualizar');
    }

    const obj2 = {
      first_Name: value.Nombres,
      last_Name: value.Apellidos,
      country: value.direccion,
      phone: value.numeroTelefonico,
    };

    const obj3 = {
      nameOfFoundation:value.Nombres,
      dateStart:value.año,
      description:value.descripcion,
      country:value.pais,
      address:value.direccion,
      phone: value.numeroTelefonico,
    };

    const obj = {
      id: User.id,
      file:rol !== 'fundation' ? obj2 : obj3,
      tipe: 'obj',
      sesion: {
        id: User.id,
        rol: rol,
        token: sesion?.token,
      },
    };

    dispatch(UpdateById(obj));
  };
  //  const [data] = useState(user);
  return (
    <div className="ml-20 w-8/12">
      <h1>INFORMACION GENERAL</h1>
      <div className="border-b-2 border-[#8E5500] mt-5 w-24"></div>
      <section className="mt-2 ">
        {User ? (
          <Formik
            initialValues={
              rol !== 'fundation'
                ? {
                  Nombres: User.firstName,
                  Apellidos: User.lastName,
                  direccion: User.country,
                  numeroTelefonico: User.phone,
                }
                : {
                  Fundacion: User.nameOfFoundation,
                  año: User.dateStart,
                  descripcion: User.description,
                  pais: User.country,
                  numeroTelefonico: User.phone,
                  direccion: User.address,
                }
            }
            onSubmit={Guardar}
            validate={rol !== 'fundation' ? validate : null}
          >
            <Form>
              <div className="flex gap-2 ">
                <section className="w-full flex flex-col gap-1">
                  <span className="flex  justify-between">
                    {rol !== 'fundation' ? <p className="mt-1">Nombres</p> : <p>Fundacion</p>}
                    <Input name={rol !== 'fundation' ? 'Nombres' : 'Fundacion'} types={'text'} />
                  </span>
                  <span className="flex justify-between">
                    {rol !== 'fundation' ? <p className="mt-1">Apellidos</p> : <p>Fecha</p>}
                    <Input name={rol !== 'fundation' ? 'Apellidos' : 'año'} types={'text'} />
                  </span>
                  {rol !== 'fundation' ? null : <span className="flex justify-between">
                    <p className="mt-1">Descripcion</p>
                    <Input name={'descripcion'} types={'text'} />
                  </span>}
                  {/*  <span className='flex items-center justify-between'>
            <p>Cumpleaños</p>
             <div className='flex justify-between gap-3 mt-2 mb-2'>
               <select className='border-[#F0A73E] text-[#F0A73E] w-40 pt-2 pb-2 border border-esmeralda700 rounded text-esmeralda700 bg-verde50' defaultValue="Default">
               <option value="Default" disabled>Day</option>
               </select>
               <select defaultValue="Default" className='border-[#F0A73E] text-[#F0A73E] w-40 border border-esmeralda700 rounded text-esmeralda700 bg-verde50'>
               <option value="Default" disabled>Month</option>
               </select>
               <select defaultValue="Default" className='border-[#F0A73E]  text-[#F0A73E] w-40 border border-esmeralda700 rounded text-esmeralda700 bg-verde50'>
               <option value="Default" disabled>Year</option>
               </select>
              </div>
            </span> */}
                  <span className="flex justify-between">
                    <p className="mt-1">Pais</p>
                    <Input name={rol !== 'fundation' ? 'direccion' : 'pais'} types={'text'} />
                  </span>
                  <span className="flex justify-between">
                    <p className="mt-1">Numero de Telefono</p>
                    <Input name={'numeroTelefonico'} types={'text'} />
                  </span>
                  {rol !== 'fundation' ? null : <span className="flex justify-between">
                    <p className="mt-1">Direccion</p>
                    <Input name={'direccion'} types={'text'} />
                  </span>}
                </section>
              </div>
              <section className="mt-24 mb-10">
                <button
                  type="submit"
                  className="bg-[#F0A73E] hover:bg-[#d68718] text-white rounded mr-5 p-2 pr-6 pl-6"
                >
                  Guardar cambios
                </button>
              </section>
            </Form>
          </Formik>
        ) : (
          <Spinner className="flex items-center justify-center h-12 w-12 " />
        )}
      </section>
    </div>
  );
}
