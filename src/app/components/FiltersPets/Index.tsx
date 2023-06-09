'use client';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Checkbox } from '@material-tailwind/react';
import { ChangeEvent } from 'react';
export default function FiltersPets() {
  type Category = string;
  const [boolean, setBoolean] = useState(false);
  let [addCategories, setCategories] = useState<Category[]>([]);
  
  function handleCategories(e:  ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    if (checked) {
      addCategories.push(value);
    } else {
      const arr = [...addCategories];
      const filt = arr.filter((v) => v !== value);
      setCategories(filt);
    }
  }
  console.log(addCategories);
  return (
    <article className="w-screen items-start">
      <nav className="flex flex-col items-start justify-evenly bg-white w-40 h-auto shadow-xl top-16 absolute">
        <section className="m-5">
          <div className="mb-3">
            <Button
              color="cyan"
              className="hover:bg-cyan-800 rounded px-2 py-1"
              onClick={() => setBoolean(!boolean)}
            >
              Species
            </Button>
            <span className={boolean ? 'flex flex-col items-start gap-2 mt-1' : 'hidden'}>
              <div className="flex justify-between items-center w-32">
                <h1>Perros</h1>
                <Checkbox color="orange" onChange={handleCategories} value={'1'}></Checkbox>
              </div>
              <div className="flex justify-between items-center w-32">
                <h1>Gatos</h1>
                <Checkbox color="orange" onChange={handleCategories} value={'2'}></Checkbox>
              </div>
              <div className="flex justify-between items-center w-32">
                <h1>Pajaros</h1>
                <Checkbox color="orange" onChange={handleCategories} value={'3'}></Checkbox>
              </div>
              <div className="flex justify-between items-center w-32">
                <h1>Tortugas</h1>
                <Checkbox color="orange" onChange={handleCategories} value={'4'}></Checkbox>
              </div>
            </span>
          </div>
          <section className="flex flex-col w-32 gap-3">
            <select name="gender" defaultValue="DEFAULT">
              <option value="DEFAULT" disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select name="gender" defaultValue="DEFAULT">
              <option value="DEFAULT" disabled>
                Year
              </option>
            </select>
          </section>
        </section>
      </nav>
    </article>
  );
}
