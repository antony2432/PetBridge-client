import Image from 'next/image';
import ModalPostSend from './components/modalPostSend';

export default function PostSend() {
  return (
    <div className='max-w-7xl w-3/4 my-4 bg-white grid grid-cols-8 justify-center items-center p-4 rounded-2xl shadow shadow-black' >
    <section className='w-full h-full flex justify-center '>
      <Image
        src="/img/perfil.jpg"
        width={40}
        height={40}
        alt="icono de perfil"
        className='border w-16 h-16 rounded-full'
      />
    </section>





<ModalPostSend />
      
    </div>
  );
}
