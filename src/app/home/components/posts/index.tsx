'use client';
import Image from 'next/image';
import { FcLike } from 'react-icons/fc';
import Likes from './components/likes/likes';
import Comments from './components/comentarios/Comments';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Spinner } from '@material-tailwind/react';
import useUserSesion from '@/hook/userSesion';

interface Post {
  id: string;
  datePublication: string;
  description: string;
  imagen: string;
  user: { firstName: string };
  likes: number;
  comments: [];
  userId: string;
}

export default function Posts() {
  const { sesion, isLoaded } = useUserSesion();
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sesion && isLoaded) {
      setLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BACK}/publications_user`, {
          headers: {
            Authorization: `Bearer ${sesion?.token}`,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [sesion, isLoaded]);
  
  return (
    <div
      className={`flex-grow flex flex-col ${
        loading ? 'justify-center' : null
      } items-center w-full h-full`}
    >
      {loading ? (
        <Spinner className="h-16 w-16" color="amber" />
      ) : (
        data.map((api) => (
          <article
            key={api.id}
            className="max-w-4xl py-4 w-5/6 rounded-lg my-4 bg-white md:grid-cols-2 2xl:w-full shadow-lg"
          >
            <section className="flex gap-5 items-center ml-[2.5%] ">
              <Avatar
                  src={
                    api?.imagen ? api.imagen : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'
                  }
                  alt={`${sesion?.firstName} ${sesion?.lastName}`}
                variant="rounded"
              />
              <section className="flex flex-col">
                <h2 className="capitalize 2xl:text-3xl text-black text-xl ">{api.user.firstName}</h2>
                <span className="text-sm">{api.datePublication}</span>
              </section>
            </section>

            <div className=" flex flex-col items-center text-xs w-full">
              <section className="mb-5 px-2 lg:px-10 max-w-80 overflow-hidden">
                <p className=" max-w-[1200px] 2xl:text-xl my-4  ">{api.description}</p>
              </section>

              <section className="w-full flex justify-center">
                {api.imagen ? (
                  <Image
                    src={api.imagen[0]}
                    width={400}
                    height={400}
                    alt="."
                    className={
                      api.imagen
                        ? api.imagen[0] === ''
                          ? 'hidden'
                          : ' w-full mb-5 max-h-[80vh] min-w-full object-contain'
                        : ''
                    }
                  />
                ) : null}
              </section>

              <div className="border-b-2  dark:border-[#94A3B8] flex justify-between w-[95%] items-center pb-3 2xl:text-xl">
                <h3 className="flex gap-4 justify-center items-center">
                  {api.likes} <FcLike />
                </h3>
                <h3>{!api.comments.length ? 0 : api.comments.length} Comentarios</h3>
              </div>
              <div className="flex justify-between w-[95%] items-center 2xl:text-xl pt-3">
                <Likes id={api.id} userId={api.userId} />
                <Comments
                  likes={api.likes}
                  firstName={api.user.firstName}
                  datePublication={api.datePublication}
                  description={api.description}
                  imagen={api.imagen ? api.imagen[0] : null}
                  id={api.id}
                  userId={api.userId}
                  comments={api.comments}
                />
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
