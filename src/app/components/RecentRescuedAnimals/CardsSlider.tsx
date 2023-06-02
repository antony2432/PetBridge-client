'use client';
import React from 'react';
import { perros } from './Perros';
import Image from 'next/image';

export let CardsSlider = perros.map((perro, index) => {
  return (
    <article key={index} className="w-64 h-96 bg-OffWhite-500 rounded-xl card shadow-lg">
      <section className="flex flex-col text-center items-center gap-4 first-content">
        <Image
          src={perro.image}
          className="w-full h-[70%] object-cover rounded-2xl"
          alt={`${perro.name} ${perro.country} - ${perro.location}`}
          width="100"
          height="100"
        ></Image>
        <ul>
          <li>
            <h2 className="text-3xl uppercase font-bold mb-4">{perro.name}</h2>
          </li>
          <li className="text-sm">
            {perro.country} / {perro.location}
          </li>
        </ul>
      </section>
      <section className="w-full px-5 flex flex-col gap-5 justify-center items-center text-sm font-normal second-content">
        <h2 className="text-3xl font-extrabold uppercase">{perro.name}</h2>
        <ul>
          <li>
            <span>{perro.gender}:</span>
            {perro.genderI}
          </li>
          <li>
            <span>Tamaño: </span>
            <span>{perro.size}</span>
          </li>
          <li>
            <span>Peso: </span>
            <span>{perro.weight}</span>
          </li>
          <li>
            <span>Animo:</span> <span>{perro.temperament}</span>
          </li>
          <li>
            <span>Edad:</span> <span>{perro.age} Meses</span>
          </li>
          <li>
            <span>Pais:</span> <span>{perro.country}</span>
          </li>
          <li>
            <span>Ubicacion:</span> <span>{perro.location}</span>
          </li>
        </ul>
      </section>
    </article>
  );
});
