'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderLanding() {
  var settings = {
    
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
       
    
  };
  return (
    <section className='border-[1px] border-black bg-[#fff4e5]'>
   

    <Slider  {...settings} className=' grid    h-[440px] lg:h-[771px] ' >
        <div className='flex flex-col-reverse h-[440px] bg-[#FFF4E5] justify-center items-center lg:h-[771px] lg:flex-row lg:flex-wrap  '>

          <section >  
             <div className='mt-[410px] ml-24 flex justify-start pl-20 items-center bg-GoldenYellow-500 bg-opacity-50 text-[#8E5500]  lg:w-[615px] lg:h-[59px] text-center '>
            <h3 className=' opacity-100 font-extrabold'>Max es un perro juguetón y enérgico. </h3>
          </div>
                      <Image src='/img/maxDog.png' className='absolute top-0 opacity max-w-48 max-h-44 lg:max-w-[600px] 2xl:max-w-[790px] lg:max-h-[500px] 2xl:max-h-[660px] lg:w-[789px] lg:h-[652px] '  alt='perro' width='200' height='180'></Image>
          </section>
          <div className='flex text-base w-4/5 flex-col justify-center items-center text-center lg:w-[40%] '> 
            <h2 className=' font-bold lg:text-4xl my-5 text-DarkBrown-700 '>Animales disponibles para adopción</h2>
          <h3 className='  my-5'>Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal necesitado. Juntos, hacemos la diferencia.</h3>
          <button className=' w-32 h-11 border-2 border-[#8E5500] bg-[#FFE6C2] rounded-lg '>Vamos</button>
          </div>
        </div>
        
    
        <div className='flex flex-col-reverse h-[440px] bg-[#FFF4E5] justify-center items-center lg:h-[771px] lg:flex-row lg:flex-wrap border-2 border-black '>

<section >  
   <div className='mt-[410px] ml-24 flex justify-start pl-20 items-center bg-GoldenYellow-500 bg-opacity-50 text-[#8E5500]  lg:w-[615px] lg:h-[59px] text-center '>
  <h3 className=' opacity-100 font-extrabold'>Max es un perro juguetón y enérgico. </h3>
</div>
            <Image src='/img/maxDog.png' className='absolute top-0 opacity max-w-48 max-h-44 lg:max-w-[600px] 2xl:max-w-[790px] lg:max-h-[500px] 2xl:max-h-[660px] lg:w-[789px] lg:h-[652px] '  alt='perro' width='200' height='180'></Image>
</section>
<div className='flex text-base w-4/5 flex-col justify-center items-center text-center lg:w-[40%] '> 
  <h2 className=' font-bold lg:text-4xl my-5 text-DarkBrown-700 '>2-Animales disponibles para adopción</h2>
<h3 className='  my-5'>Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal necesitado. Juntos, hacemos la diferencia.</h3>
<button className=' w-32 h-11 border-2 border-[#8E5500] bg-[#FFE6C2] rounded-lg '>Vamos</button>
</div>
</div>

<div className='flex flex-col-reverse h-[440px] bg-[#FFF4E5] justify-center items-center lg:h-[771px] lg:flex-row lg:flex-wrap border-2 border-black '>

<section >  
   <div className='mt-[410px] ml-24 flex justify-start pl-20 items-center bg-GoldenYellow-500 bg-opacity-50 text-[#8E5500]  lg:w-[615px] lg:h-[59px] text-center '>
  <h3 className=' opacity-100 font-extrabold'>Max es un perro juguetón y enérgico. </h3>
</div>
            <Image src='/img/maxDog.png' className='absolute top-0 opacity max-w-48 max-h-44 lg:max-w-[600px] 2xl:max-w-[790px] lg:max-h-[500px] 2xl:max-h-[660px] lg:w-[789px] lg:h-[652px] '  alt='perro' width='200' height='180'></Image>
</section>
<div className='flex text-base w-4/5 flex-col justify-center items-center text-center lg:w-[40%] '> 
  <h2 className=' font-bold lg:text-4xl my-5 text-DarkBrown-700 '>3-Animales disponibles para adopción</h2>
<h3 className='  my-5'>Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal necesitado. Juntos, hacemos la diferencia.</h3>
<button className=' w-32 h-11 border-2 border-[#8E5500] bg-[#FFE6C2] rounded-lg '>Vamos</button>
</div>
</div>
        
    </Slider>
    </section>
  );
}
