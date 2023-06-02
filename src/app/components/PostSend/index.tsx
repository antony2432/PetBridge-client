import Image from 'next/image';

export default function PostSend() {
  return (
    <div className='max-w-7xl w-3/4 m-4 bg-white grid grid-cols-8 justify-center items-center p-4 rounded-2xl shadow shadow-black' >
    <section className='w-full h-full flex justify-center '>
      <Image
        src="/img/perfil.jpg"
        width={40}
        height={40}
        alt="icono de perfil"
        className='border w-16 h-16 rounded-full'
      />
    </section>
    
      <input type="text" placeholder='En que estas pensando......' className='bg-[#F1F5F9] col-span-7 h-16 rounded-2xl p-5' />

      
    </div>
  );
}
