'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { useAppSelector } from '@/redux/hook';
import usePets from '../hook/usePets';
import Paginate from '@/app/components/Paginate/Paginate';
import { Spinner } from '@material-tailwind/react';

export default function CardsPets() {
  var Filters = useAppSelector((state) => state.paginado.Filters);
  const { allPets } = useAppSelector((state)=>state.pets);
  const { fetchAllPets } = usePets();
  const paginado = useAppSelector((state) => state.paginado.componentes);

  useEffect(() => {
    if (!allPets.length) {

      fetchAllPets();
    }
  });

  return (
    <article className=' z-40'>
      <section className="flex-grow w-full grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-2 md:max-w-6xl ">
        <CardPet allPets={Filters.length ? Filters : paginado} />
      </section>
      {!Filters.length ? (
        <section className="flex justify-center">
         {allPets.length ? (
           <Paginate />
         ) : (
            <Spinner className='flex items-center justify-center h-12 w-12'/>
         ) }
        </section>
      ) : null}
    </article>
  );
}
