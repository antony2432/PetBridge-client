'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderEjemplo from './SliderEjemplo';
import { settings } from './Settings';

export default function SliderLanding() {
 
  return (
    <section className='border-[1px] border-black bg-[#fff4e5]'>


      <Slider  {...settings} className=' grid    h-[440px] lg:h-[771px] ' >
       <SliderEjemplo/>
       <SliderEjemplo/>
       <SliderEjemplo/>
       <SliderEjemplo/>
       <SliderEjemplo/>
      </Slider>
      
    </section>
  );
}
