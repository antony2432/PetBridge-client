'use client';
import { Button, Input } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className='bg-GoldenYellow-50'>
        <section className=' overflow-hidden max-h-[40vh] h-[40vh] flex justify-center '>
        <Image
        src='/img/donation.jpg'
        alt='hola'
        width={200}
        height={200}
        className='max-w-7xl w-full object-cover bg-black/50 '
        />
        <article className='max-w-7xl w-full absolute bg-black/30 h-full max-h-[40vh] flex justify-end'>
        <form action="" className='border-2 border-black w-96 h-auto my-5   bg-white/30 mx-2 lg:mr-10 '>
            <h2 className='font-bold text-xl bg-GoldenYellow-500 py-2 text-center'>Con tu donación, ayudaras a una asosiacion que elijas a  la  recuperación y rehabilitación de animales en situación de calle</h2>
            <section className=' flex flex-col gap-5 px-5 mt-10 justify-center items-center' >
        <Input label="Email" color='white' className='bg-white/70 ' />
        <Input label='asociacion'  className='bg-white/70' />
        <Button className='bg-GoldenYellow-600 w-1/2'>enviar</Button>
        </section>
        </form>
        </article>
        </section>

<section className=' flex flex-col  justify-center items-center my-10 text-center mx-5 ' >

    <h2 className='max-w-7xl font-semibold text-2xl text-center text-GoldenYellow-900  py-5'>  Al donar a una fundación, no solo estás contribuyendo a un cambio positivo en la vida de los animales, sino que también estás haciendo una diferencia en la comunidad en general. Aquí te presentamos algunas razones para considerar donar:</h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-5  '>
<article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-2xl'>
    <h3 className='text-xl font-bold'>Salvamos vidas</h3>
    <p className=' text-start text-GoldenYellow-800'>Cada día, miles de animales abandonados y maltratados buscan desesperadamente un hogar seguro. Tu donación permite rescatar, alimentar, brindar atención veterinaria y rehabilitar a estos animales, preparándolos para encontrar una familia amorosa. Al donar, te conviertes en un héroe para estos animales, dándoles una segunda oportunidad en la vida y asegurando que no sean olvidados.</p>
</article>

<article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-2xl'>
    <h3 className='text-xl font-bold'>Fomentar la adopción responsable</h3>
    <p className=' text-start text-GoldenYellow-800'>Las fundaciones se dedica a promover la adopción responsable de animales. Con tu apoyo, pueden llevar a cabo campañas de concienciación, eventos de adopción y programas de educación que ayudan a las personas a comprender la importancia de dar un hogar a un animal necesitado. Tu donación les permite llegar a más personas y marcar la diferencia en las vidas tanto de los animales como de los adoptantes.</p>
</article>

<article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-2xl'>
    <h3 className='text-xl font-bold'>Construir una comunidad compasiva</h3>
    <p className=' text-start text-GoldenYellow-800'> Al donar a una fundación, estás contribuyendo a la construcción de una comunidad más compasiva y consciente. Los animales necesitan nuestro apoyo y cuidado, y al trabajar juntos, podemos crear un impacto duradero en la forma en que los vemos y tratamos. Además, al invertir en la adopción de animales, estamos ayudando a reducir el número de animales sin hogar y a mejorar su calidad de vida.</p>
</article>
<article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-2xl'>
    <h3 className='text-xl font-bold'>Transmitimos amor y gratitud</h3>

    <p className=' text-start text-GoldenYellow-800'>Los animales rescatados a menudo han sufrido situaciones difíciles y han sido abandonados. Tu donación muestra tu amor y compasión hacia estos seres vivos, dándoles una oportunidad de tener una vida mejor. Los animales que encuentran un hogar a través de las fundaciones te estarán eternamente agradecidos por tu generosidad y podrás experimentar la alegría de haber cambiado sus vidas para siempre.</p>
</article>
</div>
</section>
    </div>
  );
}
