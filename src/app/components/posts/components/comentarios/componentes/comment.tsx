import React from 'react';
import CommentsPost from '../../interfaces/comment.interface';
import Image from 'next/image';

export default function CommentPost({ comment }: CommentsPost) {
  console.log(comment);
  return (<>
{ comment.reverse().map((c) => (
     <section key={c.id} className='flex  lg:items-center gap-4'> 
      <Image
      src="/img/perfil.jpg"
      width={40}
      height={40}
      alt="icono de perfil"
      className='border w-10 h-10 lg:w-10 lg:h-10 my-7 lg:my-0 rounded-full'
    />
<div  className=" my-5 min-w-[20vh] w-max   bg-blue-500/10 border border-blue-gray-500/20 rounded-3xl lg:rounded-[99px] flex flex-row  gap-2 p-2 box-content">
      <div className="flex flex-col mx-4">
      <h3 className='font-bold mx-3'>{c.firstName}</h3>
       <p className='break-all'>{c.description} </p>
      </div>
     
      
    </div>
    </section>
))}
    </>
  );
}
