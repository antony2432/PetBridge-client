'use client';
import React from 'react';
import Slider from 'react-slick';
import { settings } from './Settings';
import { SliderItem1, SliderItem2, SliderItem3 } from './sliders/slider-1';
        
export default function SliderLanding() {
  return (
    <section className="bg-OffWhite-500">
      <Slider {...settings} className="h-[440px] grid lg:h-[771px]">
        <SliderItem1 />
        <SliderItem2 />
       <SliderItem3/>
      </Slider>
    </section>
  );
}
