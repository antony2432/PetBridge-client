'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderEjemplo from './SliderEjemplo';
import { settings } from './Settings';

export default function SliderLanding() {
  return (
    <section className="bg-OffWhite-500 border">
      <Slider {...settings} className="h-[440px] grid lg:h-[771px]">
        <SliderEjemplo />
        <SliderEjemplo />
        <SliderEjemplo />
        <SliderEjemplo />
        <SliderEjemplo />
      </Slider>
    </section>
  );
}
