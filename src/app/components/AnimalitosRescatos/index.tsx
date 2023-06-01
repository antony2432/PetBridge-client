'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './Settings';
import './styles.css';
import { Cards } from './Cards';

export default function AnimalesRescatadosRecientes() {
  return (
    <section className="w-full max-w-7xl flex flex-col justify-center items-center">
      <h2 className="text-2xl text-center font-extrabold text-DarkBrown-900 md:text-4xl">
        Conoce a los animalitos rescatados más recientes
      </h2>

      <Slider
        {...settings}
        className="w-64 h-[450px] flex justify-center items-center min-[720px]:w-[550px] lg:w-[840px] xl:w-[1110px] "
      >
        {Cards}
      </Slider>
    </section>
  );
}
