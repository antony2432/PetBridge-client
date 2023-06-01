import Image from 'next/image';
import React from 'react';

export default function SectionPost() {
  return (
    <section className="max-w-7xl px-8 mx-5 py-5 bg-OffWhite-500 flex flex-col gap-5 items-center md:flex-row md:justify-center">
      <div className="md:w-[50%] md:flex md:justify-center">
        <Image src="/img/perrito2.png" alt="perrito agradable" width="217" height="230" className='lg:w-80'/>
      </div>
      <section className="flex flex-col gap-5 md:w-[40%]">
        <h3 className="text-DarkBrown-900 text-center md:text-left text-xl font-extrabold">
          Explora nuestros artículos y consejos para el cuidado de mascotas
        </h3>
        <p className="text-justify md:text-left text-sm">
          Aprende más sobre el cuidado, la salud y el bienestar de tus mascotas a través de nuestros
          artículos informativos. Descubre consejos prácticos y recursos útiles para brindarles una
          vida feliz y saludable. Haz clic en el botón de abajo para acceder a nuestros posts.
        </p>
      </section>
    </section>
  );
}
