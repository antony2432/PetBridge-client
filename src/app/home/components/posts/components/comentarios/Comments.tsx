'use client';
import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from '@material-tailwind/react';
import { BiCommentDetail } from 'react-icons/bi';
import Image from 'next/image';
import CommentsProps from '../interfaces/Comments.interface';
import CommentsSend from './componentes/CommentsSend';
import CommentPost from './componentes/comment';
import useUserSesion from '@/hook/userSesion';

export default function Comments({
  firstName,
  datePublication,
  description,
  imagen,
  id,
  userId,
  comments,
}: CommentsProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const { sesion } = useUserSesion();

  return (
    <>
      <button className="flex gap-3 justify-center items-center" onClick={handleOpen}>
        <BiCommentDetail className="text-xl lg:text-3xl" /> Comentar
      </button>

      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[90%] h-[95%] lg:min-w-[60vw] overflow-y-scroll flex flex-col items-center"
      >
        <DialogHeader className="w-[80%] flex gap-5 items-center ml-[2.5%] ">
          <Avatar
            src={sesion?.image ? sesion.image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'}
            alt={`${sesion?.firstName} ${sesion?.lastName}`}
            variant="rounded"
          />
          <section className="flex flex-col">
            <h2 className="capitalize 2xl:text-3xl text-black text-xl ">{firstName}</h2>
            <span className="text-sm">{datePublication}</span>
          </section>
        </DialogHeader>
        <DialogBody divider className="w-5/6 text-center my-4">
          <section className="flex justify-center items-center mb-5">
            <p className="w-[95%] 2xl:text-xl my-4">{description}</p>
          </section>
          <section className="w-full flex justify-center">
            {imagen ? (
              <Image
                src={imagen}
                width={400}
                height={400}
                alt="."
                className={
                  imagen === '' ? 'hidden' : ' w-4/5 max-h-[70vh] mb-5 rounded-xl object-contain'
                }
              />
            ) : null}
          </section>
        </DialogBody>
        <DialogFooter className="flex justify-center item-center">
          <section className="w-[80vw] lg:w-[50vw]  ">
            <CommentsSend id={id} userId={userId} />

            <CommentPost comment={comments} />
          </section>
        </DialogFooter>
      </Dialog>
    </>
  );
}
