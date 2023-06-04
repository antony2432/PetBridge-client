import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import Likes from './components/likes/likes';
import Comments from './components/comentarios/Comments';
export default function Posts() {

  const ejemploApi = [{
    'id': '1', 'name': 'Max', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", 'imagen':'/img/ImagenesPruebaPost/perrito.jpg', 'meGusta': '20' },
  { 'id': '2', 'name': 'Antony', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ', 'imagen':'', 'meGusta': '10' },

  { 'id':'3', 'name': 'Axel', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': 'REDMI es tu pasaporte global para conocer nuevas personas y compartir experiencias. Con características de personalización únicas, oportunidades de aprendizaje y una comunidad inclusiva, READMI te permite expresar tu individualidad mientras te conectas con otros. Sumérgete en un mundo de descubrimiento, amistad y diversión. ¡Ven y únete a la aventura en READMI!', 'imagen':'/img/ImagenesPruebaPost/perrito.jpg', 'meGusta': '700' },
   
  { 'id': '4', 'name': 'Fer', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem", 'imagen':'/img/ImagenesPruebaPost/Adoptame.jpeg', 'meGusta': '20' },
  
  { 'id': '5', 'name': 'Leo', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'imagen':'/img/ImagenesPruebaPost/gatitos.jpg', 'meGusta': '10' },
  
  { 'id': '6', 'name': 'Eloy', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': 'REDMI es tu pasaporte global para conocer nuevas personas y compartir experiencias. Con características de personalización únicas, oportunidades de aprendizaje y una comunidad inclusiva, READMI te permite expresar tu individualidad mientras te conectas con otros. Sumérgete en un mundo de descubrimiento, amistad y diversión. ¡Ven y únete a la aventura en READMI!', 'imagen':'', 'meGusta': '700' },
  { 'id': '7', 'name': 'fabi', 'fecha':'20 de febrero a las 08:00', 'comentarios': 10, 'post': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'imagen':'/img/ImagenesPruebaPost/gatitos.jpg', 'meGusta': '10' },
  
  ];


  return (
    <div className='' >

      {ejemploApi.map((api) => (

        <div key={api.id} className='max-w-7xl h-auto py-4 w-5/6 mx-auto relative shadow-lg rounded-lg my-4 bg-white md:grid-cols-2 2xl:w-full' >


          <div className="flex flex-row ml-[2.5%] ">
            <Image
              src="/img/perfil.jpg"
              width={40}
              height={40}
              alt="icono de perfil"
              className='mr-3 mt-3 w-10 h-10 2xl:w-24 2xl:h-24 rounded-full'
            />
            <section className='flex flex-col justify-end items-center gap-3'>
            <h2 className="float-left 2xl:text-5xl ">{api.name}</h2>
            <h2 className="">{api.fecha}</h2>
          </section>
          </div>

          <div className=" flex flex-col items-center text-xs">
            <section className="flex justify-center items-center mb-5"><p className='w-[95%] 2xl:text-xl my-4'>{api.post}</p></section>
            <section className='w-full flex justify-center'>
            <Image
              src={api.imagen}
              width={400}
              height={400}
              alt="."
              className={api.imagen === '' ? 'hidden' : ' w-4/5 mb-5 rounded-xl object-contain'}
            />
            </section>

            <div className='border-b-2  dark:border-[#94A3B8] flex justify-between w-[95%] items-center pb-3 2xl:text-xl'>
              <h3 className='flex gap-4 justify-center items-center'>{api.meGusta} <FcLike/></h3>
              <h3 >{api.comentarios} Comentarios</h3>
            </div>
            <div className='flex justify-between w-[95%] items-center 2xl:text-xl pt-3'>
              <Likes/>
              {/* <button className='flex gap-3 justify-center items-center'><BiCommentDetail className='text-3xl'/> Comentar</button> */}
<Comments name={api.name} fecha={api.fecha} post={api.post} imagen={api.imagen}/>
            </div>
          </div>
        </div>


      ))}

    </div>
  );
}
