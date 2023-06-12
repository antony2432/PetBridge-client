'use client';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hook';
import { Filter } from '@/redux/thunk';
import './boton.css';
//import { setCategorias } from '@/redux/slice/pets';
export default function FiltersPets() {
  //type Category = string;
  const [boolean, setBoolean] = useState(false);
  //let [addCategories, setCategories] = useState<Category[]>([]);
  const dispatch = useAppDispatch();
  /*   function handleCategories(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    dispatch(setCategorias(value));
  } */
  function handleSpecies(e) {
    const { value, checked } = e.target;
    dispatch(Filter(value));
  }
  function reset() {
    dispatch(Filter());
  }
  return (
    <article className="w-screen items-start">
      <nav className="flex flex-col items-start justify-evenly bg-transparent w-40 h-auto top-16 absolute">
        <section className="m-5">
          <div className="mb-3">
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
                <button
                  color="orange"
                  onClick={handleSpecies}
                  value={'dog'}
                >
                  Perros
                </button>
              </div>
              <div
                id="2"
                className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
              >
                <button
                  color="orange"
                  onClick={handleSpecies}
                  value={'cat'}
                >
                  Gatos
                </button>
              </div>
              <div
                id="3"
                className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
              >
                <button
                  color="orange"
                  onClick={handleSpecies}
                  value={'bird'}
                >
                  Pajaros
                </button>
              </div>
              <div
                id="4"
                className="flex justify-center hover:bg-blue-gray-50 rounded items-center w-32"
              >
                <button
                  color="orange"
                  onClick={handleSpecies}
                  value={'snake'}
                >
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
          {/*  <section className="flex flex-col w-32 gap-3">
            <select name="gender" defaultValue="DEFAULT" onChange={(e) => handleCategories(e)}>
              <option value="DEFAULT" disabled>
                Gender
              </option>
              <option>male</option>
              <option>female</option>
            </select>
            <select name="year" defaultValue="DEFAULT" onChange={(e) => handleCategories(e)}>
              <option value="DEFAULT" disabled>
                Year
              </option>
            </select>
          </section> */}
        </section>
      </nav>
    </article>
  );
}
