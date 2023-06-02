import Image from 'next/image';

export default function PostSend() {
  return (
    <div className='grid grid-cols-1 justify-center mx-auto my-10 p-2 relative shadow-lg dark:shadow-black rounded-lg  2xl:max-w-full 2xl:h-80 dark:bg-[#242526]   w-5/6 md:max-w-lg md:grid-cols-2 md:h-28'>
    <Image
        src="/img/perfil.jpg"
        width={40}
        height={40}
        alt="icono de perfil"
        className='mx-auto mb-3 md:mx-0 2xl:w-24 2xl:h-24 2xl:flex 2xl:m-5 rounded-full'
      />
      <input type="text" placeholder='En que estas pensando......' className='rounded-md p-2 h-12 dark:bg-[#3a3b3c]  dark:border-none 2xl:text-xl 2xl:h-40 2xl:max-w-[100vh]  dark:border-teal-700 dark:placeholder-white dark:text-white dark:border-[1px] bg-teal-100 md: max-w-lg md:ml-[-70%]' />

       <button className='bg-teal-800 w-70 mt-3 text-white rounded-lg md:w-40 md:absolute md:right-2 md:bottom-3 2xl:w-96 2xl:h-14 2xl:bottom-10'>Publicar</button>
    </div>
  );
}
