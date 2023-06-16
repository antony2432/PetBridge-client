import Image from 'next/image';
import ModalPostSend from './components/modalPostSend';

export default function PostSend() {
  return (

    <div className="max-w-5xl w-5/6 my-4 bg-white flex items-center gap-2  py-4 px-2 lg:pl-8 rounded-2xl shadow shadow-black 2xl:w-full">
      <section className="w-12 h-12 lg:w-24 lg:h-24 flex justify-center">
        <Image
          src="/img/perfil.jpg"
          width={40}
          height={40}
          alt="icono de perfil"
          className="border w-12 h-12 lg:w-24 lg:h-24 rounded-full"
        />
      </section>

      <ModalPostSend />
    </div>
  );
}
