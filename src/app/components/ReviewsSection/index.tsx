'use client';
import useSliderReview from './hook/useSliderReview';
import Image from 'next/image';
import ButtonsSlider from './ButtonsSlider';
import { ICard } from './interface/ICard.interface';

function Card({ data, setLoaded, loaded }: ICard) {
  return (
    <article className={`${loaded ? 'opacity-1' : 'transition-opacity duration-200 opacity-0'} h-full flex flex-col px-8 py-6 mt-5 items-center bg-OffWhite-500 shadow-md border hover:scale-105 duration-300 sm:flex-row`}>
        <Image
          onLoad={() => setLoaded(true)}
          src={data.foto}
          width={400}
          height={400}
          alt="foto"
          className="w-44 h-40 m-4 object-cover"
        ></Image>
        <section className="mx-7 mb-7 flex items-center justify-end">
          <span className="flex flex-col gap-5 items-end">
            <h6 className="w-full text-xs lg:text-sm border-b text-end border-DarkBrown-900">{data.date}</h6>
            <h5 className="text-lg text-center w-full">{data.name}</h5>
            <p className="text-sm text-justify w-56 text-slate-600">{data.description}</p>
          </span>
        </section>
    </article>
  );
}

export default function ReviewsSection() {
  const { dataSlide, loading, next, previous, setLoading } = useSliderReview();
  return (
    <article className="w-full max-w-7xl flex flex-col gap-5 items-center">
      <h3 className="text-lg text-center font-extrabold text-DarkBrown-900 sm:text-2xl lg:text-4xl">
        Descubre cómo Puppy Pet ha cambiado vidas
      </h3>
      <h4 className="w-2/3 my-5 text-GoldenYellow-500 text-center">
        Conoce las historias de éxito de aquellos que han adoptado mascotas o colaborado con
        fundaciones a través de Puppy Pet
      </h4>
      <Card setLoaded={setLoading} loaded={loading} data={dataSlide}></Card>
      <ButtonsSlider Next={next} Previous={previous}></ButtonsSlider>
    </article>
  );
}
