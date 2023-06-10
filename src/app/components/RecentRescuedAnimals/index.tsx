'use client';
import Slider from 'react-slick';
import { settings } from './Settings';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';
// import { BsEmojiSmile } from 'react-icons/bs';
const male = <AiOutlineMan />;
const female = <AiOutlineWoman />;
// const friendly = <BsEmojiSmile />;
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './styles.css';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';
import { fetchAllPets } from '@/redux/slice/pets';





export default function RecentRescuedAnimals() {
  const { allPets }:any = useAppSelector(state=> state.pets);

  const dispatch = useAppDispatch();
  let petsTeen = allPets.slice().reverse().slice(0, 10);
 
  useEffect(() => { 
    dispatch(fetchAllPets());
  }, [dispatch]);
  return (
    <section className="w-full max-w-7xl flex flex-col justify-center items-center">
      <h3 className="text-2xl text-center font-extrabold text-DarkBrown-900 md:text-4xl">
        Conoce a los animalitos rescatados más recientes
      </h3>
      <Slider
        {...settings}
        className="w-72 h-[450px] flex justify-center items-center min-[720px]:w-[550px] lg:w-[840px] xl:w-[1110px]"
      >
        {petsTeen.map((pet:any, index:KeyType) => (
 
    <article key={index} className="w-64 h-96 bg-OffWhite-500 rounded-xl card shadow-lg">
      <section className="flex flex-col text-center items-center gap-4 first-content">
        <Image
          src={pet.image[0]}
          className="w-full h-[70%] object-cover rounded-2xl"
          alt={`${pet.name} ${pet.country} - ${pet.state}`}
          width="100"
          height="100"
        ></Image>
        <ul>
          <li>
            <h2 className="text-3xl uppercase font-bold mb-4 h-10 object-cover overflow-hidden">{pet.name}</h2>
          </li>
          <li className="text-sm">
            {pet.country} / {pet.state}
          </li>
        </ul>
      </section>
      <section className="w-full px-5 flex flex-col gap-5 justify-center items-center text-sm font-normal second-content">
        <h2 className="text-3xl font-extrabold uppercase">{pet.name}</h2>
        <ul>
          <li>
            <span>{pet.gender}:</span>
            {pet.gender === 'female' ? female : male}
          </li>
          <li>
            <span>Especie: </span>
            <span>{pet.specie}</span>
          </li>
          <li>
            <span>Peso: </span>
            <span>{pet.weight}</span>
          </li>
          
          <li>
            <span>Edad:</span> <span>{pet.age_M ? pet.age_M : pet.age_Y} Meses</span>
          </li>
          <li>
            <span>Pais:</span> <span>{pet.country}</span>
          </li>
          <li>
            <span>Estado:</span> <span>{pet.state}</span>
          </li>
          <li>
            <span>Ciudad:</span> <span>{pet.city}</span>
          </li>
        </ul>
      </section>
    </article>
  
        ))}
      </Slider>
    </section>
  );
}
