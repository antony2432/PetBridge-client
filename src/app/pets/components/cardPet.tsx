'use client';
import {
  Card,
  CardHeader,
  
  CardFooter,

} from '@material-tailwind/react';
import Image from 'next/image';

import DetallePet from './detalle/detalle';


export default function CardPet({ allPets }:any) {


  
  return (
<>
     { allPets.map((info:any) => (<Card key={info.id} className="w-72 h-96 m-6  hover:w-[103%] hover:h-[500px]    hover:mx-0 hover:-mt-28 hover:mb-11 hover:z-10" >
        <CardHeader floated={false} className="h-80 flex justify-center items-center"> 
        
         {info.file ? <Image
           src={info.file} 
           alt='imagen' 
           width={300}
            height={300}
            className=' w-full max-h-full rounded-2xl  '
            /> : null}
        </CardHeader>
      
        <CardFooter className="flex justify-center pt-2">
           <DetallePet info={info}/>
            
          
        </CardFooter>
       
       
      </Card>
   
     ))
         }
</>
  );
}