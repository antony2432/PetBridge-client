'use client';
import { useRouter } from 'next/navigation';
import CardsPets from './components/cardsPets';

import { Button } from '@material-tailwind/react';




export default async function Pets() {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/registroPet');
  };
  return (
    <main
      className="w-full h-full flex-grow flex flex-col items-center p-2"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
    <div>
    <Button onClick={handleClick} size="sm">
          Formulario para dar en adopción
        </Button>
      <h2 className=' font-bold text-4xl mt-5'>
        <span className='text-6xl text-DarkBrown-900'>Mis </span>
        <span className="text-5xl text-GoldenYellow-500">Mascotas</span>
         </h2>
      <CardsPets />
      </div> 
    </main>
  );
}
