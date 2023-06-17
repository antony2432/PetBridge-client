'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { useAppSelector } from '@/redux/hook';
import usePets from '../hook/usePets';

export default function CardsPets() {
  const { fetchAllPets } = usePets();
  // const paginado = useAppSelector((state) => state.paginado.componentes);
  // const Filters = useAppSelector((state) => state.paginado.Filters);
  const { allPets } = useAppSelector((state)=> state.pets);
  useEffect(() => {
    fetchAllPets();
  }, []);

  return (
    <section className="flex-grow w-full grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20 md:max-w-6xl ">
      <CardPet allPets={allPets} />
    </section>
  );
}
