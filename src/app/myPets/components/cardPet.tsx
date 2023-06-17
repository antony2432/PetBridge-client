'use client';
import { Card, CardHeader, CardFooter } from '@material-tailwind/react';
import Image from 'next/image';
import DetallePet from './../../pets/components/detalle/detalle';
import ButtonOpcion from './EdicionPets/buttonOpcion';
import useUserSesion from '@/hook/userSesion';
import { useAppSelector } from '@/redux/hook';


export default function CardPet() {
  const { allPets } = useAppSelector((state)=> state.pets);
  const { sesion } = useUserSesion(); 
  console.log(sesion);
  const reversedPets = allPets.slice().reverse();
  console.log(reversedPets);
  const petsId = reversedPets.filter((element:any) => element.as_id === sesion?.id );
  console.log(petsId);
  return (
    <>
      {petsId.map((info: any) => (
        <Card
          key={info.id}
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
            <ButtonOpcion idPet={info}/>
          </CardFooter>
         
        </Card>
      ))}
    </>
  );
}
