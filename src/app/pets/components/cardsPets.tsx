'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { fetchAllPets } from '@/redux/slice/pets'; 
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function CardsPets() {
  const { allPets } = useAppSelector(state=> state.pets);

  const dispatch = useAppDispatch();
  
 
  useEffect(() => {
    
    dispatch(fetchAllPets());
    
    
  
  }, [allPets]);

    
  return (

      <section className='max-w-screen grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20'>
         
         <CardPet allPets={allPets} />
        
      </section>
      
   
  );
}
