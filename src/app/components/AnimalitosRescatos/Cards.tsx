'use client';
import React from 'react';
import Perros from './Perros';
import Image from 'next/image';

 
    
          
export let Cards = Perros.map((perro, index)=>{
  return (
         
            
     <div key={index} className='card shadow-md shadow-black  bg-[#fff4e5]  h-96 w-64  rounded-xl'>

<div className="first-content  ">

         <Image src={`/img/${perro.name}.jpg`} className=' h-80 w-[850px]'  alt='perro' width='100' height='100'></Image>
      </div >

      <div className="second-content text-sm flex flex-col items-start ml-[20%]">
             <h2>{perro.name}</h2>
           <h3>{perro.sexo}</h3>
           <h3>Tamaño:{perro.tamaño}</h3>
       <h3>Peso:{perro.peso}</h3>
       <h3>Edad: {perro.edad} Meses</h3>
       <h3>Pais: {perro.pais}</h3>
       <h3>Ubicacion: {perro.Ubicacion}</h3>
         </div>
     </div>
  );
});
      

