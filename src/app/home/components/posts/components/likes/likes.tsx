'use client';
import axios from 'axios';
import { useState } from 'react';
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';
import LikesProps from '../interfaces/Likes.interface';




export default function Likes({ id, userId }: LikesProps) {
  const [like, setLike] = useState(false);

  function handleMeGusta() {
    const data = {
      like: !like,
      id: id,
      userId: userId,
    };

    setLike(!like);
   
 
    axios
      .patch('http://localhost:3000/publications_user', data)
      .then(response => {
        console.log('Datos actualizados:', response.data);
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
      });
  }


  
  return (
    <div>
      <button className='flex gap-1 mt-1 items-center justify-center' onClick={handleMeGusta}>
        {!like ? (
          <BsHandThumbsUp className='text-black text-xl lg:text-3xl' />
        ) : (
          <BsHandThumbsUpFill className='text-light-blue-700 text-xl lg:text-3xl' />
        )}
        Me gusta
      </button>
    </div>
  );
}