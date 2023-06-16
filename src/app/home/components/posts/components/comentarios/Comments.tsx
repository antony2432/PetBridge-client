'use client';
import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { BiCommentDetail } from 'react-icons/bi';
import Image from 'next/image';
import CommentsProps from '../interfaces/Comments.interface';
import CommentsSend from './componentes/CommentsSend';
import CommentPost from './componentes/comment';


export default function Comments({ firstName, datePublication, description, imagen, id, userId, comments }: CommentsProps) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment >
  <button className='flex gap-3 justify-center items-center' onClick={handleOpen}><BiCommentDetail className='text-xl lg:text-3xl'/> Comentar</button>

      <Dialog open={open} handler={handleOpen} className='min-w-[90%] h-[95%] lg:min-w-[60vw] overflow-y-scroll flex flex-col items-center'>
        <DialogHeader className='w-[80%] ' > <div className="flex flex-row ml-[2.5%] h-[95%]  ">
            <Image
              src="/img/perfil.jpg"
              width={40}
              height={40}
              alt="icono de perfil"
              className='mr-3 mt-3 w-10 h-10 2xl:w-24 2xl:h-24 rounded-full'
            />
           <section className='flex flex-col justify-end '>
            <h2 className="2xl:text-5xl text-black text-xl ">{firstName}</h2>
            <h3 className=" font-light 2xl:text-2xl text-sm">{datePublication}</h3>
          </section>
          </div></DialogHeader>
        <DialogBody divider className='w-5/6 text-center my-4' >
        <section className="flex justify-center items-center mb-5"><p className='w-[95%] 2xl:text-xl my-4'>{description}</p></section>
            <section className='w-full flex justify-center'>
           {imagen ? <Image
              src={imagen}
              width={400}
              height={400}
              alt="."
              className={imagen === '' ? 'hidden' : ' w-4/5 max-h-[70vh] mb-5 rounded-xl object-contain'}
            /> : null}
            </section>
        </DialogBody>
        <DialogFooter className="flex justify-center item-center">
          <section className='w-[80vw] lg:w-[50vw]  '>
            {/* <section className='flex justify-center my-5'> {likes} <Likes id={id} userId={userId}/></section> */}
            
<CommentsSend id={id} userId={userId} />

 <CommentPost comment={comments}/> 
         </section>
        
          <Button className='absolute top-5 right-5 bg-[#e6c088] text-[#030303] rounded-full h-10 w-10 p-0' variant="outlined"  onClick={handleOpen}>
            X
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}