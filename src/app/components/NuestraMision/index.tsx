import Image from 'next/image';

export default function NuestraMision() {
  return (
    <div className='flex flex-col-reverse w-screen justify-center items-center p-10 lg:flex-row'>
        
     <Image
     src='/img/perroEjemplo.jpg'
     alt='Nuestra mision'
     width='500'
     height='367'
     className=' w-[491px] m-0 h-auto lg:w-[547px] lg:h-[367px] rounded-3xl mt-12'
     />

 <section className='max-w-[491px] lg:ml-24  '>
  <h2 className='font-extrabold text-4xl my-12 text-center '>cual es nuestra misión?</h2>
  <p className='font-semibold text-base text-center '>Apoyamos a fundaciones y organizaciones de rescate, facilitando donaciones, adopciones y la difusión de historias conmovedoras. Promovemos el bienestar animal, conectamos mascotas con familias amorosas y fomentamos la adopción responsable. Juntos, creamos un mundo donde cada mascota encuentra amor y un hogar.</p>
 </section>
 
    </div>
  );
}
