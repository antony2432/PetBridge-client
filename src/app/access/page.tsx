import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className='w-screen h-screen max-h-[700px]  flex justify-center items-center'>
        <Image
        src='/img/restingido.jpg'
        alt='denegado'
        width={200}
        height={200}
        className='max-w-2xl w-screen' />

    </div>
  );
}
