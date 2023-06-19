'use client';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
        <h1 className='flex text-center text-6xl'>Gracias por donar </h1>
     <Link href='http://localhost:3001/donation'>   <Button>regresar al sitio</Button></Link>
    </div>
  );
}
