'use client';
import Slider from 'react-slick';
import { settings } from './Settings';
import { CardsSlider } from './CardsSlider';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './styles.css';

export default function RecentRescuedAnimals() {
  return (
    <section className="w-full max-w-7xl flex flex-col justify-center items-center">
      <h3 className="text-2xl text-center font-extrabold text-DarkBrown-900 md:text-4xl">
        Conoce a los animalitos rescatados más recientes
      </h3>
      <Slider
        {...settings}
        className="w-72 h-[450px] flex justify-center items-center min-[720px]:w-[550px] lg:w-[840px] xl:w-[1110px]"
      >
        {CardsSlider}
      </Slider>
    </section>
  );
}
