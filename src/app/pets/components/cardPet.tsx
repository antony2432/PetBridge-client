'use client';
import {
  Card,
  CardHeader,
  
  CardFooter,

} from '@material-tailwind/react';
import Image from 'next/image';

import DetallePet from './detalle/detalle';
import ButtonOpcion from './EdicionPets/buttonOpcion';




export default function CardPet({ allPets }:any) {
  const reversedPets = allPets.slice().reverse();




  return (
<>
     { reversedPets.map((info:any) => (<Card key={info.id} className="w-72 h-96 m-6  hover:w-[103%] hover:max-w-[340px] hover:h-[500px]    hover:mx-0 hover:-mt-28 hover:mb-11 hover:z-10" >
        <CardHeader floated={false} className="h-80 flex justify-center items-center"> 
        
         {info.image ? <Image
           src={info.image[0]} 
           alt='imagen' 
           width={200}
            height={200}
            className='max-w-full w-full h-full max-h-auto rounded-2xl object-cover absolute top-0 '
            /> : <p>hola</p>}
        </CardHeader>
      
        <CardFooter className="flex justify-center pt-2">
           <DetallePet info={info}/>
            
          
        </CardFooter>
       <ButtonOpcion/>
       
      </Card>
   
     ))
         }
         
</>
  );
}