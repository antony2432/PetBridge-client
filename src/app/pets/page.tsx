'use client';
import { Button } from '@material-tailwind/react';
import CardsPets from './components/cardsPets';
import Link from 'next/link';
import FiltersPets from '../components/FiltersPets/Index';
import Paginate from '../components/Paginate/Paginate';
// import SearchBar from '../components/SearchBar/Index';



export default async function Pets() {


  return (
    <div className='bg-[#f9f4f1] m-0  flex flex-col justify-center items-center '>
     
      <FiltersPets/>
   <Link href="/registroPet">   
   <Button className='mt-5'>Formulario para dar en adopción</Button>
</Link>
      <CardsPets />
      <Paginate/>
    </div>
  );
}
