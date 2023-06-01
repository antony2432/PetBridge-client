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
    <section className='flex flex-col justify-center items-center w-screen  mt-24 '>
    <h2 className='text-center text-[#3C2313] text-4xl font-extrabold'>Conoce a los animalitos rescatados más recientes</h2>

    <Slider   {...settings} className=' flex flex-rows justify-center items-center  h-[450px]   w-64 min-[720px]:w-[550px] lg:w-[840px] xl:w-[1110px] '>
      
        {Cards}

    </Slider>
    </section>
  );
}
