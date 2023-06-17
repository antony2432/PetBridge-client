import React from 'react';
import {  BsToggleOn } from 'react-icons/bs';
export default function Security() {
  return (
   <div className='ml-20 mt-10 mr-10'>
    <form>
    <h1>PREGUNTAS DE SEGURIDAD</h1>
    <div className='border-b-2 border-#042F2E mt-5 w-24'></div>
    <div className='flex mt-5'>
      <div className='w-96'>
        <h1 className='text-verde750 font-semibold'>Pregunta de seguridad</h1>
         <input placeholder='Tu pregunta' className='rounded border p-2 pl-5 w-full mt-2 placeholder-esmeralda700 border-esmeralda700 bg-verde50'></input>
        </div>
        <div className='p-2'></div>
      <div className='w-96'>
        <h1 className='text-verde750 font-semibold '>
         Tu respuesta
        </h1>
        <input placeholder='Tu respuesta' className='rounded border w-full p-2 pl-5 mt-2 border-gris600 bg-verde50'></input>
      </div>
    </div>
    <h1>OPCIONES DE SEGURIDAD</h1>
    <div className='border-b-2 border-#042F2E mt-5 w-24'></div>
    <div className='mt-5 text-verde750'>
      <div className='flex justify-between'><h1>Guardar session por solo 1 día</h1><button><BsToggleOn size={30} color="#0D9488"/></button></div>
      <div className='flex justify-between'><h1>Borrar cookie con cada cerrada de sesion</h1><button><BsToggleOn size={30} color="#0D9488"/></button></div>
    </div>
    <div className='flex justify-end mt-52'>
              <button className='text-esmeralda700 border hover:bg-rojo200 border-esmeralda700 rounded mr-5 p-2 pr-6 pl-6'>Cancel</button>
              <button className='bg-esmeralda700 hover:bg-esmeralda800 text-blanco rounded p-2 pr-6 pl-6'>Guardar cambios</button>
    </div>
  </form>
</div>
  );
}
