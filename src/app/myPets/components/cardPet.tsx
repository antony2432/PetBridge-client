'use client';
import { Card, CardHeader, CardFooter } from '@material-tailwind/react';
import Image from 'next/image';
import DetallePet from './detalle/detalle';

import useUserSesion from '@/hook/userSesion';
import { useAppSelector } from '@/redux/hook';



export default function CardPet() {
  const { allPets } = useAppSelector((state)=> state.pets);
  const { sesion } = useUserSesion(); 
  const reversedPets = allPets.slice().reverse();

  const petsId = reversedPets.filter((element:any) => element.as_id === sesion?.id );
  
  return (
    <>
    
      {petsId[0] ? petsId.map((info: any) => (
       <div key={info.id}>
         <Card
         
          className="w-72 h-96 mb-2  hover:w-[140%] hover:max-w-[440px] hover:h-[500px]     hover:-mt-28 hover:mb-0 hover:z-10"
        >
          <CardHeader floated={false} className="h-80 flex justify-center items-center">
            {info.image ? (
              <Image
                src={info.image[0]}
                alt="imagen"
                width={200}
                height={200}
                className="max-w-full w-full h-full max-h-auto rounded-2xl object-cover absolute top-0 "
              />
            ) : (
              <p>hola</p>
            )}
          </CardHeader>

          <CardFooter className="flex justify-center pt-2">
            <DetallePet info={info} />
          </CardFooter>
           
        </Card>
        </div>
      )) : <section className='w-screen max-w-6xl h-[50vh] flex justify-center text-center   '>
      <h2 className='w-full h-10'>No tenes mascotas por el momento. Para agregar haz click en el boton <b>&quot;formulario para dar en adopcion&quot;</b></h2>
        </section>}
    </>
  );
}
