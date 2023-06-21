'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';

import usePets from '../../pets/hook/usePets';


export default function CardsPets() {
  const { fetchAllPets } = usePets();
  useEffect(() => {
    fetchAllPets();
  }, [fetchAllPets]);



  return (
    <section className=" flex-grow w-full grid gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20 md:max-w-6xl ">
      <CardPet  />
    </section>
  );
}
