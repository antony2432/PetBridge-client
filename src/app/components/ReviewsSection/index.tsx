'use client';
import { Slides } from './Slides';
import Image from 'next/image';
import { useState } from 'react';
import Buttons from './Buttons';
function Card({ selectedSlide, setLoaded, loaded }: any) {
  return (
    <div className={loaded ? 'opacity-1' : 'transition-opacity duration-200 opacity-0'}>
    <section className="flex flex-col sm:flex-row w-full mt-5 bg-[#FFF4E5] shadow-md">
      <div className="flex justify-center m-4">
        <Image
          onLoad={() => setLoaded(true)}
          src={selectedSlide.foto}
          alt="foto"
          className='w-44 h-40'
        ></Image>
      </div>
      <div className="flex m-7 items-center justify-end">
        <span className="flex flex-col items-end gap-5">
          <h6 className="text-sm border-b w-full text-end border-[#5C3600]">
            {selectedSlide.date}
          </h6>
          <h5 className="text-base text-center w-full">{selectedSlide.name}</h5>
          <p className="text-xs text-center w-56 text-[#555555]">{selectedSlide.description}</p>
        </span>
      </div>
    </section>
    </div>
  );
}

export default function ReviewsSection() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(Slides[0]);
  const [loaded, setLoaded] = useState(false);
  const selectNewProfile = (index: number, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectIndex < Slides.length - 1 : selectIndex > 0;
      const newIndex = next
        ? condition
          ? selectIndex + 1
          : 0
        : condition
          ? selectIndex - 1
          : Slides.length - 1;
      setSelectedSlide(Slides[newIndex]);
      setSelectIndex(newIndex);
    }, 500);
  };
  const Previous = () => {
    selectNewProfile(selectIndex, false);
  };
  const Next = () => {
    selectNewProfile(selectIndex, true);
  };
  return (
    <article className="flex flex-col items-center ">
      <h2 className="text-[#3C2313] text-lg text-center sm:text-2xl lg:text-4xl font-semibold">
        Descubre cómo Puppy Pet ha cambiado vidas
      </h2>
      <h4 className="mt-5 w-2/3 text-[#F0A73E] text-center">
        Conoce las historias de éxito de aquellos que han adoptado mascotas o colaborado con
        fundaciones a través de Puppy Pet
      </h4>
      <Card setLoaded={setLoaded} loaded={loaded} selectedSlide={selectedSlide}></Card>
      <div className="flex">
        <Buttons Next={Next} Previous={Previous}></Buttons>
      </div>
    </article>
  );
}
