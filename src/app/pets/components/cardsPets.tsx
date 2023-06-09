'use client';
import React, { useEffect } from 'react';
import CardPet from './cardPet';
import { fetchAllPets } from '@/redux/slice/pets'; 
import { useAppDispatch } from '@/redux/hook';

export default function CardsPets() {
  // const { allPets } = useAppSelector(state=> state.pets);
  const allPets = [{
    name:'rocky',
    specie:'gato',
    description:'esta es la description',
    status:'homeless',
    gender:'female',
    file:'/img/rico.jpg',
  },
  {
    name:'rocky',
    specie:'gato',
    description:'esta es la description',
    status:'homeless',
    gender:'female',
    file:'/img/rico.jpg',
  },
  {
    name:'rocky',
    specie:'gato',
    description:'esta es la description',
    status:'homeless',
    gender:'female',
    file:'/img/rico.jpg',
  },
  {
    name:'rocky',
    specie:'gato',
    description:'esta es la description',
    status:'homeless',
    gender:'female',
    file:'/img/rico.jpg',
  },
  {
    name:'rocky',
    specie:'gato',
    description:'esta es la description',
    status:'homeless',
    gender:'female',
    file:'/img/rico.jpg',
  }];
  const dispatch = useAppDispatch();
  
  
  useEffect(() => {
    dispatch(fetchAllPets());
  }, [dispatch]);

    
  return (

      <section className='max-w-screen grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20'>
         
         <CardPet allPets={allPets} />
        
      </section>
      
   
  );
}
