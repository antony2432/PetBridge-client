import React from 'react';

export default function Notifications() {
  return (
    <div className='ml-20 mt-16'>
      <p className='flex pl-3 text-sm rounded-xl pt-5 pb-5 bg-esmeralda850 text-blanco text-start w-5/6'> Nunca distribuiremos su dirección de correo electrónico a terceros. Lea sobre la comunicación por correo electrónico en nuestra política de privacidad.</p>
      <p className='mt-20 text-esmeralda850 font-semibold'>Preferencias de notificaciones</p>
      <div className='mt-5'></div>
      <form className='flex flex-col'>
        <div className='flex items-center'><input type="checkbox"/><label>Cuando comenten tu publicacion</label></div>
        <div className='flex items-center'><input type="checkbox"/><label>Cuando incies sesion</label></div>
        <div className='flex items-center'><input type="checkbox"/><label>Cuando te envien mensajes</label></div>
        <button className='bg-esmeralda700 hover:bg-esmeralda800 text-blanco rounded mt-5 p-2 w-52'>Guardar preferencias</button>
      </form>

    </div>
  );
}