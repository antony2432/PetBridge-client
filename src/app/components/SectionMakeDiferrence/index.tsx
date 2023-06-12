import Image from 'next/image';
import { IOptionsItem } from './interface/IOptionsItem.interface';
import { IStyle } from './interface/IStyle.interface';

function optionsItemStyle(orientation: string) {
  let style = {
    justify: '',
    text: '',
    self: '',
  };

  switch (orientation) {
    case 'start':
      style = {
        justify: 'lg:items-start',
        text: 'lg:text-start',
        self: 'lg:self-start',
      };
      break;
    case 'end':
      style = {
        justify: 'lg:items-end',
        text: 'lg:text-end',
        self: 'lg:self-end',
      };
      break;
    default:
      break;
  }

  return style;
}

function OptionsItem({ title, paragraph, color, orientation, img }: IOptionsItem) {
  let style: IStyle = optionsItemStyle(orientation);
  return (
    <article
      className={`w-full py-10 grid grid-cols-2  items-center justify-center ${color} ${style.justify} ${style.self} lg:w-3/4 lg:px-8 gap-10`}
    > 
    <div className='w-full '>
      <Image width={200} height={200} alt='imagenes' className=' float-right w-48 '   src={`/img/imagenesPruebaPost/${img}`}/>
     </div>
      <div className='flex flex-col justify-center h-full'>
      <h3 className="text-2xl font-extrabold mb-5 md:text-4xl">{title}</h3>
      <p className={`w-72 text-justify ${style.text} lg:w-96 text-sm lg:text-base`}>{paragraph}</p>
      </div>
      
    </article>
  );
}

export default function SectionMakeDiferrence() {
  return (
    <article className="w-full px-5 lg:px-0 flex flex-col gap-16 max-w-7xl">
      <section className="flex justify-center items-center">
        <h1 className="flex text-DarkBrown-900 w-96 text-xl text-center font-extrabold sm:text-3xl">
          Descubre cómo Pet Bridge puede ayudarte a marcar la diferenciaz
        </h1>
      </section>

      <section className="w-full flex flex-col gap-5 justify-center text-white">
        <OptionsItem
          title="Explora las opciones"
          paragraph="Explora las fundaciones y organizaciones de rescate de mascotas en nuestra plataforma."
          color="bg-SkyBlue-500"
          orientation="start"
          img="pet-trust1.png"
        />

        <OptionsItem
          title="Realiza una donación"
          paragraph="Apoya a tu fundación favorita realizando una donación directa o mediante campañas
          específicas."
          color="bg-LightOlive-500"
          orientation="end"
          img="pet-trust2.png"
        />

        <OptionsItem
          title="Contacta a la fundación"
          paragraph="Ponte en contacto con la fundación para obtener más información sobre la mascota que
          te interesa."
          color="bg-SkyBlue-500"
          orientation="start"
          img="pet-trust3.png"
        />

        <OptionsItem
          title="Comparte tu historia"
          paragraph="Comparte tu experiencia de adopción y ayuda a inspirar a otros a unirse al movimiento
          de adopción responsable."
          color="bg-LightOlive-500"
          orientation="end"
          img="pet-trust1.png"
        />
      </section>
    </article>
  );
}
