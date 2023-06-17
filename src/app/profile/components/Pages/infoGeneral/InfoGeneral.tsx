'use client';
import React from 'react';
import Input from './Input';
import { Form, Formik } from 'formik';
import { validate } from '@/app/profile/validations';
import { Spinner } from '@material-tailwind/react';
import { useAppDispatch } from '@/redux/hook';
import { UpdateById } from '@/redux/thunk';

export default function InfoGeneral({ User }: any) {
  const dispatch = useAppDispatch();
  const Guardar = (value: any) => {
    console.log(value);
    const obj = {
      id: User[0].id,
      file: value,
    };
    dispatch(UpdateById(obj));
  };
  //  const [data] = useState(user);
  console.log(User);
  return (
    <div className="ml-20 w-8/12">
      <h1>INFORMACION GENERAL</h1>
      <div className="border-b-2 border-[#8E5500] mt-5 w-24"></div>
      <section className="mt-2 ">
        {User.length ? (
          <Formik
            initialValues={{
              Nombres: User[0].firstName,
              Apellidos: User[0].lastName,
              direccion: User[0].country,
              numeroTelefonico: User[0].phone,
            }}
            onSubmit={Guardar}
            validate={validate}
          >
            <Form>
              <div className="flex gap-2 ">
                <section className="w-full flex flex-col gap-1">
                  <span className="flex  justify-between">
                    <p className="mt-1">Nombres</p>
                    <Input name={'Nombres'} types={'text'} />
                  </span>
                  <span className="flex justify-between">
                    <p className="mt-1">Apellidos</p>
                    <Input name={'Apellidos'} types={'text'} />
                  </span>
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
                    <Input name={'direccion'} types={'text'} />
                  </span>
                  <span className="flex justify-between">
                    <p className="mt-1">Numero de Telefono</p>
                    <Input name={'numeroTelefonico'} types={'text'} />
                  </span>
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
