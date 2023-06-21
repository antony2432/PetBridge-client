import React from 'react';
import CommentsPost from '../../interfaces/comment.interface';
import { Avatar } from '@material-tailwind/react';

export default function CommentPost({ comment }: CommentsPost) {
  return (
    <>
      {comment.reverse().map((c) => (
        <section key={c.id} className="flex  lg:items-center gap-4">
          <Avatar
            src={c.imgProf ? c.imgProf : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'}
            alt={c?.firstName}
            variant="rounded"
            size="sm"
          />
          <section className="my-5 min-w-[20vh] w-max  bg-blue-500/10 border border-blue-gray-500/20 rounded-xl flex flex-col  gap-2 p-2 box-content px-3">
            <h3 className="font-bold capitalize text-xs">{c.firstName}</h3>
            <p className="break-all text-lg">{c.description} </p>
          </section>
        </section>
      ))}
    </>
  );
}
