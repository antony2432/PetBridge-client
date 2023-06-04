'use client';
import { useState } from 'react';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';

export default function Likes() {
  const [like, setLike] =  useState(false);
  function handleMeGusta() {
    return setLike(!like);
  }

  return (
    <div>
 <button className='flex gap-1 mt-1' onClick={handleMeGusta}> <BsFillHandThumbsUpFill className={!like ? 'text-teal-500' : ' text-indigo-800'} />  Me gusta </button>

    </div>
  );
}
