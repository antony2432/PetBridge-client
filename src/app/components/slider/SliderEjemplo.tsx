import Image from 'next/image';
export default function SliderEjemplo() {
  return (
    <div className="h-[440px] flex flex-col gap-4 justify-center items-center lg:h-[771px] lg:flex-row lg:flex-wrap">
      <Image
        src="/img/PerroSlider.png"
        alt="perro"
        width="200"
        height="180"
        className="max-w-48 max-h-52 top-0 opacity lg:max-w-[600px] lg:max-h-[500px] lg:w-[789px] lg:h-[652px] 2xl:w-[790px] 2xl:max-h-[660px]"
      />

      <section className="w-4/5 flex flex-col gap-5 items-center justify-center text-center lg:w-[40%]">
        <h2 className="text-xl font-extrabold text-DarkBrown-700 lg:text-4xl">
          Animales disponibles para adopción
        </h2>
        <h3 className='text-sm'>
          Encuentra tu compañero de vida en Puppy Pet. Adopta y brinda amor y un hogar a un animal
          necesitado. Juntos, hacemos la diferencia.
        </h3>
        <button className="hidden w-32 h-11 bg-[#FFE6C2] border-2 border-amber-900 rounded-lg lg:block">
          Vamos
        </button>
      </section>
    </div>
  );
}
