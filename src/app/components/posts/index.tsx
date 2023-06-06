'use client';
import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import Likes from './components/likes/likes';
import Comments from './components/comentarios/Comments';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
export default function Posts() {

  const [data, setData] = useState<Array<{ id: string, datePublication: string, description: string, imagen: string, user: { firstName: string }, likes: number, comments: [], userId: string }>>([]);
  const [isFetched, setIsFetched] = useState(false);
  

  const fetchData = async () => {
    try {
     
      const response = await axios.get('http://localhost:3000/publications_user');
      setData(response.data);
      setIsFetched(!isFetched);
      console.log(response.data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  
  const ejemploApi = data;

  return (
    <div className='flex flex-col items-center border w-screen' >

      {ejemploApi.map((api) => (
            
        <div key={api.id} className='max-w-5xl  py-4 w-5/6   rounded-lg my-4 bg-white md:grid-cols-2 2xl:w-full shadow shadow-black' >


          <div className="flex flex-row ml-[2.5%] ">
          <Image
              src="/img/perfil.jpg"
              width={40}
              height={40}
              alt="icono de perfil"
              className='mr-3 mt-3 w-12  h-12 2xl:w-24 2xl:h-24 rounded-full'
            />
            <section className='flex flex-col justify-end '>
            <h2 className="2xl:text-5xl text-black text-xl ">{api.user.firstName}</h2>
            <h3 className="">{api.datePublication}</h3>
          </section>
          </div>

          <div className=" flex flex-col items-center text-xs w-full">
            <section className="flex justify-center items-center mb-5 px-2 lg:px-10 max-w-80 overflow-hidden">
              <p className=' max-w-[1200px] 2xl:text-xl my-4  '>{api.description}</p>
              </section>
            <section className='w-full flex justify-center'>
         { api.imagen ?  <Image
              src={ api.imagen[0] }
              width={400}
              height={400}
              alt="."
              className={api.imagen ? api.imagen[0] === '' ? 'hidden' : ' w-full mb-5 max-h-[80vh] min-w-full object-contain' : ''}
            /> : null}
            </section>

            <div className='border-b-2  dark:border-[#94A3B8] flex justify-between w-[95%] items-center pb-3 2xl:text-xl'>
              <h3 className='flex gap-4 justify-center items-center'>{api.likes} <FcLike/></h3>
              <h3  >{!api.comments.length ? 0 : api.comments.length} Comentarios</h3>
            </div>
            <div className='flex justify-between w-[95%] items-center 2xl:text-xl pt-3'>
              <Likes id={api.id} userId={api.userId}/>
              {/* <button className='flex gap-3 justify-center items-center'><BiCommentDetail className='text-3xl'/> Comentar</button> */}
<Comments likes={api.likes} firstName={api.user.firstName} datePublication={api.datePublication} description={api.description} imagen={api.imagen ? api.imagen[0] : null} id={api.id} userId={api.userId} comments={api.comments}/>
            </div>
          </div>
        </div>


      ))}

    </div>
  );
}
