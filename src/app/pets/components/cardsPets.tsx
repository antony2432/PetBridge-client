'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { useAppSelector } from '@/redux/hook';
import usePets from '../hook/usePets';

export default function CardsPets() {
  const { fetchAllPets } = usePets();
  const { allPets } = useAppSelector((state) => state.pets);

  useEffect(() => {
    fetchAllPets();
  }, [allPets]);

  return (
    <section className="max-w-screen grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20">
      <CardPet allPets={allPets} />
    </section>
  );
}
