'use client';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hook';
import { Filter } from '@/redux/thunk';
import { useRouter } from 'next/navigation';
export default function FiltersPets() {
  //type Category = string;
  const router = useRouter();
  const [boolean, setBoolean] = useState(false);
  //let [addCategories, setCategories] = useState<Category[]>([]);
  const dispatch = useAppDispatch();
  /*   function handleCategories(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    dispatch(setCategorias(value));
  } */
  function handleSpecies(e: React.ChangeEvent<HTMLInputElement>, value: any) {
    const { checked } = e.target;
    var obj = {
      value,
      checked,
    };
    dispatch(Filter(obj));
  }

  function reset() {
    dispatch(Filter(''));
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/registroPet');
  };
  return (
    <nav className="w-full p-5 flex items-start justify-between bg-transparent">
      <section>
        <div>
          <Button
            color="cyan"
            className="hover:bg-cyan-800 rounded px-2 py-1"
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
              <h1>Pajaros</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'bird')}></input>
            </div>
            <div
              id="4"
              className="flex justify-between hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <h1>Vivoras</h1>
              <input type="checkbox" onChange={(e) => handleSpecies(e, 'snake')}></input>
            </div>
            <div className="flex justify-center items-center w-32">
              <Button color="orange" onClick={reset}>
                reset
              </Button>
            </div>
          </span>
        </div>
      </section>

      <Button onClick={handleClick} size="sm">
        Formulario para dar en adopción
      </Button>
    </nav>
  );
}
