'use client';
import useUserSesion from '@/hook/userSesion';
import { Button, Input, Rating, Textarea } from '@material-tailwind/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

export default function page() {
  const { sesion } = useUserSesion();
  function handleReviews() {}
  return (
    <div className="flex flex-col m-5 items-center">
      <h1 className="font-light text-GoldenYellow-600 text-3xl mb-2">Reseñas</h1>
      <Formik
        initialValues={{
          email: '',
          message: '',
          rating: '',
        }}
        onSubmit={handleReviews}
      >
        <Form className='flex flex-col w-96 p-5 gap-4 bg-orange-100 rounded shadow-lg'>
          <div className='flex w-full items-center justify-center font-semibold'><h1>{sesion?.firstName}</h1></div>
          <div className='flex items-center justify-between'>
            <h1>Email</h1> <div className='w-3/4'><Field as={Input} className='justify-end' label="email" type="text" name="email" /></div>
          </div>
          <div className='flex justify-start items-center gap-12'>
            <h1>Rating</h1> <Field as={Rating} name="rating" />
          </div>
          <div className='flex items-start justify-between'>
            <h1>Message</h1> <div className='w-3/4'><Field as={Textarea}  className='justify-end' label="message" type="text" name="message" /></div>
          </div>
          <Button className='bg-DarkBrown-500 w-full items-center' type="submit">Enviar</Button>
        </Form>
      </Formik>
    </div>
  );
}
