'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { fetchAllPets } from '@/redux/slice/pets';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function CardsPets() {
  const { allPets } = useAppSelector((state) => state.pets);
  const paginado = useAppSelector((state) => state.paginado.componentes);
  const Filters = useAppSelector((state) => state.paginado.Filters);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allPets.length !== 0) {
      return;
    } else {
      dispatch(fetchAllPets());
    }
  }, []);

  return (
    <section className="max-w-screen grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20">
      <CardPet allPets={Filters.length ? Filters : paginado}/>
    </section>
  );
}
