'use client';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
export default function Page() {
  return (
    <div className='w-screen h-[60vh] flex flex-col justify-center items-center'>
        <h1 className='flex text-center text-3xl max-w-7xl mb-10 '> 
        <Image
        src='/img/snoopy.png'
        alt='snoopy'
        height={200}
        width={200} />
        
        ¡Gracias por tu valiosa donación! Tu generosidad marca la diferencia en la vida de los animales que cuidamos. Tu apoyo nos permite rescatar, alimentar y brindarles atención médica. Juntos, estamos haciendo del mundo un lugar mejor para ellos. ¡Gracias por marcar la diferencia con tu donación!
        <Image
        src='/img/pngegg(1).png'
        alt='snoopy'
        height={200}
        width={200} />
       </h1>
     <Link href='http://localhost:3001/donation'>   <Button className=' bg-GoldenYellow-500 shadow-lg hover:shadow-GoldenYellow-500/80' >Regresar al sitio</Button></Link>
    </div>
  );
}
