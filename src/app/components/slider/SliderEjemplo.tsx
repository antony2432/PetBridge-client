import Image from 'next/image';
export default function SliderEjemplo() {
  return (
    
         <div className='flex flex-col-reverse h-[440px] bg-[#FFF4E5] justify-center items-center lg:h-[771px] lg:flex-row lg:flex-wrap  '>

<Image 
src='/img/PerroSlider.png' 
alt='perro'
width='200' 
height='180' 
className=' top-0 opacity max-w-48 max-h-52 lg:max-w-[600px] 2xl:w-[790px] lg:max-h-[500px] 2xl:max-h-[660px] lg:w-[789px] lg:h-[652px] ' 
/>

<section className='flex text-base w-4/5 flex-col justify-center items-center text-center lg:w-[40%] '>
  <h2 className=' font-bold lg:text-4xl my-5 text-DarkBrown-700 '>Animales disponibles para adopción</h2>
  <h3 className='  my-5'>Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal necesitado. Juntos, hacemos la diferencia.</h3>
  <button className='hidden lg:block w-32 h-11 border-2 border-[#8E5500] bg-[#FFE6C2] rounded-lg '>Vamos</button>
  
</section>
</div>

    
  );
}
