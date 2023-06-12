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
  function handleSpecies(e: React.MouseEvent<HTMLButtonElement>, value: string) {
    e.preventDefault();
    dispatch(Filter(value));
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
              className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <button color="orange" onClick={(e) => handleSpecies(e, 'dog')}>
                Perros
              </button>
            </div>
            <div
              id="2"
              className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <button color="orange" onClick={(e) => handleSpecies(e, 'cat')}>
                Gatos
              </button>
            </div>
            <div
              id="3"
              className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <button color="orange" onClick={(e) => handleSpecies(e, 'bird')}>
                Pajaros
              </button>
            </div>
            <div
              id="4"
              className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
            >
              <button color="orange" onClick={(e) => handleSpecies(e, 'snake')}>
                Vivoras
              </button>
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
