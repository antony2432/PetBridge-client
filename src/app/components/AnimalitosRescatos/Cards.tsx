'use client';
import React from 'react';
import Perros from './Perros';
import Image from 'next/image';

export let Cards = Perros.map((perro, index) => {
  return (
    <div key={index} className="w-64 h-96 bg-OffWhite-500 rounded-xl card shadow-xl">
      <div className="first-content flex flex-col text-center items-center gap-2">
        <Image
          src={`/img/${perro.name}.jpg`}
          className=" w-60 h-56 rounded-2xl"
          alt="perro"
          width="100"
          height="100"
        ></Image>
        
         <h2 >{perro.name}</h2>
         <h3 className=' text-sm '>{perro.pais}</h3>
         <h3 className=' text-sm '>{perro.Ubicacion}</h3>
         
      </div>

      <div className="text-sm flex flex-col items-center second-content">
       
        <h3 className='flex'>{perro.sexoT}{perro.sexoI}</h3>
        <h3>Tamaño:{perro.tamaño}</h3>
        <h3>Peso:{perro.peso}</h3>
        <h3>Edad: {perro.edad} Meses</h3>
        <h3>Pais: {perro.pais}</h3>
        <h3>Ubicacion: {perro.Ubicacion}</h3>
      </div>
    </div>
  );
});
