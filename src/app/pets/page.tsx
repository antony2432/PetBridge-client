'use client';
import { Button } from '@material-tailwind/react';
import CardsPets from './components/cardsPets';
import Link from 'next/link';



export default async function Pets() {


  return (
    <div className='bg-[#f9f4f1] m-0  flex flex-col justify-center items-center '>
   <Link href="/registroPet">   
   <Button>Formulario para dar en adopción</Button>
</Link>
      <CardsPets />
    </div>
  );
}
