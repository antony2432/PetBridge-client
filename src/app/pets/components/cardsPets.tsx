'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { useAppSelector } from '@/redux/hook';
import usePets from '../hook/usePets';
import Paginate from '@/app/components/Paginate/Paginate';

export default function CardsPets() {
  var Filters = useAppSelector((state) => state.paginado.Filters);
  const { fetchAllPets } = usePets();
  const paginado = useAppSelector((state) => state.paginado.componentes);
  useEffect(() => {
    fetchAllPets();
  }, []);

  return (
    <article>
      <section className="flex-grow w-full grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20 md:max-w-6xl ">
        <CardPet allPets={Filters.length ? Filters : paginado} />
      </section>
      {!Filters.length ? (
        <section className="flex justify-center">
          <Paginate />
        </section>
      ) : null}
    </article>
  );
}
