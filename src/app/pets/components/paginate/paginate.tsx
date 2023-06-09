import React from 'react';

import { nextPage, prevPage } from '@/redux/slice/pets';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function Paginate() {
  const { numPage } = useAppSelector(state=>state.pets);
  const dispatch = useAppDispatch();
  const { allPets } = useAppSelector(state => state.pets);
  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }


  

  let amountPage = Math.floor(allPets.length / 10);  

 
    
  return (
   
    <div className='w-5/6  max-h-20 mx-0 my-auto flex justify-center p-2 text-center items-center text-white'>
      {numPage > 1 ? <button onClick={prev} className=''> Prev </button> : <div className=''> </div>}
     
        
        <p>{numPage} of  {amountPage === 0 ? amountPage + 1 : amountPage}</p> 
        
      {numPage < amountPage ? <button onClick={next} className=''> Next </button> : <div className=''></div>}
    </div>
  );
}
