'use client';
import React from 'react';
import RatingForm from './components/RatingForm';
import Resenas from './components/Resenas';
export default function page() {  
  return (
    <div className='bg-orange-100'>
    <div className="flex flex-col m-5 items-center">
      <h1 className="font-light text-GoldenYellow-600 text-3xl mb-2">Reseñas</h1>
      <RatingForm></RatingForm>
    </div >
    <Resenas></Resenas>
    </div>
  );
}
