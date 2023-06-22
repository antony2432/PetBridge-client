'use client';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hook';
import { Filter } from '@/redux/thunk';

import useUserSesion from '@/hook/userSesion';
import { reset } from '@/redux/slice/Paginado/Index';
export default function FiltersPets() {
  
  //type Category = string;
 
  const [boolean, setBoolean] = useState(false);
  //let [addCategories, setCategories] = useState<Category[]>([]);
  const dispatch = useAppDispatch();
  /*   function handleCategories(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    dispatch(setCategorias(value));
  } */
  const { sesion } = useUserSesion();
  function handleSpecies(e: React.ChangeEvent<HTMLInputElement>, value: any) {
    const { checked } = e.target;
    var obj = {
      value,
      checked,
      sesion,
    };
    dispatch(Filter(obj));
  }

  function Reset() {
    dispatch(reset());

  }


  return (
    <nav className="w-full max-w-6xl absolute ml-10 mt-10 flex items-start justify-between z-50 bg-transparent">
      <section>
        <div>
          <Button
            color="cyan"
            className="hover:bg-cyan-800 w-40 h-10 text-2xl rounded px-2 py-1"
            onClick={() => setBoolean(!boolean)}
          >
            Species
          </Button>
          <span
            className={
              boolean
                ? 'flex flex-col items-center gap-2 mt-1 p-2 shadow-sm rounded bg-white'
                : 'hidden'
            }
          >
            <div
              id="1"
              className="flex justify-between hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <h1>Perros</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'dog')}></input>
            </div>
            <div
              id="2"
              className="flex justify-between hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <h1>Gatos</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'cat')}></input>
            </div>
            <div
              id="3"
              className="flex justify-between hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <h1>Aves</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'bird')}></input>
            </div>
            <div
              id="4"
              className="flex justify-between hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <h1>Reptiles</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'snake')}></input>
            </div>
            <div className="flex justify-center items-center w-32">
              <Button color="orange" onClick={Reset}>
                Reset
              </Button>
            </div>
          </span>
        </div>
      </section>

      
    </nav>
  );
}
