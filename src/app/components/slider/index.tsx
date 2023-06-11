'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { settings } from './Settings';

function SliderItem() {
  return (
    <article className="h-full flex flex-col gap-4 justify-center items-center lg:h-[771px] lg:flex-row">
      <Image
        src="/img/maxDog.png"
        alt="perro"
        width="200"
        height="180"
        className="max-h-52 object-contain hover:scale-105 duration-300 lg:max-w-[600px] lg:max-h-[500px] lg:w-[789px] lg:h-[652px] 2xl:w-[790px] 2xl:max-h-[660px]"
      />

      <section className="flex flex-col gap-5 items-center justify-center text-center lg:w-[40%]">
        <h2 className="text-2xl font-extrabold text-DarkBrown-700 lg:text-4xl">
          Animales disponibles para adopción
        </h2>
        <h3 className="text-justify">
          Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal
          necesitado. Juntos, hacemos la diferencia.
        </h3>
        <button className="hidden w-32 h-11 bg-[#FFE6C2] border-2 border-amber-900 rounded-lg lg:block">
          Vamos
        </button>
      </section>
    </article>
  );
}

export default function SliderLanding() {
  return (
    <section className="bg-OffWhite-500">
      <Slider {...settings} className="h-[440px] grid lg:h-[771px]">
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </section>
  );
}
