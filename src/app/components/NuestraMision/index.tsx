import Image from 'next/image';

export default function NuestraMision() {
  return (
    <div className="max-w-7xl p-10 flex flex-col-reverse gap-8 justify-between items-center xl:p-0 lg:flex-row">
      <Image
        src="/img/perroEjemplo.jpg"
        alt="Nuestra mision"
        width="500"
        height="367"
        className="w-[491px] h-auto m-0 rounded-3xl lg:w-[547px] lg:h-[367px]"
      />

      <section className="flex flex-col gap-8 items-center lg:ml-24">
        <h2 className="text-4xl text-center font-extrabold text-DarkBrown-900">
          Cual es nuestra misión?
        </h2>
        <p className="text-base text-justify font-semibold">
          Apoyamos a fundaciones y organizaciones de rescate, facilitando donaciones, adopciones y
          la difusión de historias conmovedoras. Promovemos el bienestar animal, conectamos mascotas
          con familias amorosas y fomentamos la adopción responsable. Juntos, creamos un mundo donde
          cada mascota encuentra amor y un hogar.
        </p>
      </section>
    </div>
  );
}
