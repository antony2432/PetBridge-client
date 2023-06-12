import Image from 'next/image';
import Link from 'next/link';

export function SliderItem1() {
  return (
      <article className="h-full flex flex-col gap-4 justify-center items-center lg:h-[771px] lg:flex-row">
        <Image
          src="https://lh3.googleusercontent.com/gqCKIFJag3cD9wt2cfoINbk3BGBq6yLovBHEfBlKBOup7EpRId05JF2FJaPvDpHMP3WpVj1K12iI56XjdgsmS6tvHDOSU5rUAd0lN2PaT9cJfIySvYzn0DdCzAMymqCOC8kuKY-yspXugwcs0ZG-TgvoENAqhye7siSLcHlKKhvFFRo6TXT5nDWO9PxEe9f8q5Is3oLyGc1Pb7LyLsOM1JjfYu2aSOGqQXD8rfxzOt5zPvDCzZVUu-RTPYN9u60ndLBOZO_ul9NICO0JXVg5V_mxDJjplSXQAjNrUTZEb5XhgNDJrQ1J9CG_98YxKSDRlLsc0s48mYPz0Urn_t_VK_1DP1hRX_tImhgHGd3uqmXKQ95ie3VAiBol5jVFBT61x1X_0f96do9ieL728OtQBOdKjOzO6E6mbMDZiPBKzoyFOB-4acWSrB7l0ebMnWd1mqlnAy-IVKpdRiIvjVmAuRwFZs_f2uz4jrF5lPRBJNqKg1A_1SecNdiY7JyMeVmHvkXErMxJ3wvhBn2Ilg0syKcbm2Xvz0xoK6umVRs80wf7rShildwB5hCScs6ooaRTva-_N1L6UD5PPbIuQ7X-zXYJNRhguMbbNLnivE36dABjUijkqUwabxno2w6gNt-8tAxVgQJf2RiL7zyGze-FRo8Z1y3aA32wXtMJ4kwj-igQKbaLQoola5VJM9-avO4QctpjtYd5NUT0WyUAGPoerQt39msi6W9O_dLKvTdn5w05yZWPsNncr_aEiOE2LpP2rAqGPAB9ZnTLSm8ewK2R07xv1o8VITvwa0Q0PXLLZ4Mqb7emwN2BNx_eDr-N2UV7EHbcXLaeQQzzGwrYgOwJxs3jgEyV1omIOFu_RNbkbGn1bpj0n0ueoen9HQHJm5J8TG5ORoxH1THkJzwbcLKiQK6E0ZO16RxuDbYzhnBdEOt2Upw=w933-h1386-s-no?authuser=0"
          alt="perro"
          width="200"
          height="180"
          className="max-h-52 object-contain hover:scale-105 duration-300 lg:max-w-[600px] lg:max-h-[500px] lg:w-[789px] lg:h-[652px] 2xl:w-[790px] 2xl:max-h-[660px]"
        />
  
        <section className="flex flex-col gap-5 items-center justify-center text-center lg:w-[40%]">
          <h2 className="text-2xl font-extrabold text-DarkBrown-700 my-10 lg:text-4xl">
            Animales disponibles para adopción
          </h2>
          <h3 className='text-justify'>
            Encuentra tu compañero de vida en Pet Bridge. 
          </h3>
          <h3 className='mb-5'>Adopta y brinda amor y un hogar a un animal
            necesitado. Juntos, hacemos la diferencia.</h3>
          <Link href='/pets'>
          <button className="hidden w-72 h-11 bg-[#FFE6C2] border-2 border-amber-900 rounded-lg lg:block">
            Descubre a tu copañero
          </button></Link>
        </section>
      </article>
  );
}
  
export function SliderItem2() {
  return (
        <article className="h-full flex flex-col gap-4 justify-center items-center lg:h-[771px] lg:flex-row">
          <Image
            src="https://lh3.googleusercontent.com/gqCKIFJag3cD9wt2cfoINbk3BGBq6yLovBHEfBlKBOup7EpRId05JF2FJaPvDpHMP3WpVj1K12iI56XjdgsmS6tvHDOSU5rUAd0lN2PaT9cJfIySvYzn0DdCzAMymqCOC8kuKY-yspXugwcs0ZG-TgvoENAqhye7siSLcHlKKhvFFRo6TXT5nDWO9PxEe9f8q5Is3oLyGc1Pb7LyLsOM1JjfYu2aSOGqQXD8rfxzOt5zPvDCzZVUu-RTPYN9u60ndLBOZO_ul9NICO0JXVg5V_mxDJjplSXQAjNrUTZEb5XhgNDJrQ1J9CG_98YxKSDRlLsc0s48mYPz0Urn_t_VK_1DP1hRX_tImhgHGd3uqmXKQ95ie3VAiBol5jVFBT61x1X_0f96do9ieL728OtQBOdKjOzO6E6mbMDZiPBKzoyFOB-4acWSrB7l0ebMnWd1mqlnAy-IVKpdRiIvjVmAuRwFZs_f2uz4jrF5lPRBJNqKg1A_1SecNdiY7JyMeVmHvkXErMxJ3wvhBn2Ilg0syKcbm2Xvz0xoK6umVRs80wf7rShildwB5hCScs6ooaRTva-_N1L6UD5PPbIuQ7X-zXYJNRhguMbbNLnivE36dABjUijkqUwabxno2w6gNt-8tAxVgQJf2RiL7zyGze-FRo8Z1y3aA32wXtMJ4kwj-igQKbaLQoola5VJM9-avO4QctpjtYd5NUT0WyUAGPoerQt39msi6W9O_dLKvTdn5w05yZWPsNncr_aEiOE2LpP2rAqGPAB9ZnTLSm8ewK2R07xv1o8VITvwa0Q0PXLLZ4Mqb7emwN2BNx_eDr-N2UV7EHbcXLaeQQzzGwrYgOwJxs3jgEyV1omIOFu_RNbkbGn1bpj0n0ueoen9HQHJm5J8TG5ORoxH1THkJzwbcLKiQK6E0ZO16RxuDbYzhnBdEOt2Upw=w933-h1386-s-no?authuser=0"
            alt="adopcion"
            width="200"
            height="180"
            className="max-h-52 object-contain hover:scale-105 duration-300 lg:max-w-[600px] lg:max-h-[500px] lg:w-[789px] lg:h-[652px] 2xl:w-[790px] 2xl:max-h-[660px]"
          />
    
          <section className="flex flex-col gap-5 items-center justify-center text-center lg:w-[40%]">
            <h2 className="text-2xl font-extrabold text-DarkBrown-700 lg:text-4xl">
              Afuera hay un ser lleno de color y alegría esperando por ti 
            </h2>
            <h3 className='text-justify text-2xl font-extrabold text-DarkBrown-700 lg:text-2xl'>
              Una mascota lo cambia todo, Adopatar siempre será la mejor decision
            </h3>
            <h4>Cambia su vida, cambia tu vida</h4>
            <button className="hidden w-32 h-11 bg-[#FFE6C2] border-2 border-amber-900 rounded-lg lg:block">
              Vamos
            </button>
          </section>
        </article>
  );
}
    
export function SliderItem3() {
  return (
          <article className="h-full flex flex-col gap-4 justify-center items-center lg:h-[771px] lg:flex-row">
            <Image
              src="/img/imagenesPruebaPost/adoptame4.png"
              alt="adopcion"
              width="200"
              height="180"
              className="max-h-52 object-contain hover:scale-105 duration-300 lg:max-w-[600px] lg:max-h-[500px] lg:w-[789px] lg:h-[652px] 2xl:w-[790px] 2xl:max-h-[660px]"
            />
      
            <section className="flex flex-col gap-5 items-center justify-center text-center lg:w-[40%]">
              <h2 className="text-2xl font-extrabold text-DarkBrown-700 lg:text-4xl mb-10">
                Porque adoptar un animal adulto? 
              </h2>
              <section className='flex flex-col  w-full text-DarkBrown-700 gap-3'>
              <h3 className=''>
                - Ya alcanzo su tamaño máximo entre los 8 y 10 meses de edad.
              </h3>
              <h3>- Su personalidad ya está definida, tenemos más información de cómo es, que le gusta y qué no, y sobre qué conductas trabajar si es necesario.</h3>
              <h3>- El aprendizaje es más rápido.</h3>
              <h3>- Tal vez seas su última oportunidad.</h3>
              </section>
            </section>
          </article>
  );
}