'use client';
import React, { useState } from 'react';

export default function FiltersPets() {
  const [boolean, setBoolean] = useState(false);
  return (
    <article className="w-screen items-start">
      <nav className="flex flex-col items-start justify-evenly bg-white w-52 h-full shadow-xl">
        <section className="m-5">
          <div className='mb-3'>
           <button onClick={()=>setBoolean(!boolean)}>Species</button>
           <span className={boolean ? 'flex items-center gap-2' : 'hidden'}>
            <h1>hola</h1>
            <input type="checkbox"></input>
           </span>
          </div>
          <section className='flex flex-col gap-3'>
          <select name="gender" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          </select>
          <select name="gender" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>Select Temperament</option>
          </select>
          <select name="gender" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>Select Year</option>
          </select>
          </section>
       
        </section>
      </nav>
    </article>
  );
}
