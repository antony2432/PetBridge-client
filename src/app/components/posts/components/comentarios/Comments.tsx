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


export default function Comments({ name, fecha, post, imagen }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment >
  <button className='flex gap-3 justify-center items-center' onClick={handleOpen}><BiCommentDetail className='text-3xl'/> Comentar</button>

      <Dialog open={open} handler={handleOpen} className='h-[95%] '>
        <DialogHeader > <div className="flex flex-row ml-[2.5%]  ">
            <Image
              src="/img/perfil.jpg"
              width={40}
              height={40}
              alt="icono de perfil"
              className='mr-3 mt-3 w-10 h-10 2xl:w-24 2xl:h-24 rounded-full'
            />
            <section className='flex flex-col justify-end items-center gap-3'>
            <h2 className="float-left 2xl:text-5xl ">{name}</h2>
            <h2 className="">{fecha}</h2>
          </section>
          </div></DialogHeader>
        <DialogBody divider >
        <section className="flex justify-center items-center mb-5"><p className='w-[95%] 2xl:text-xl my-4'>{post}</p></section>
            <section className='w-full flex justify-center'>
            <Image
              src={imagen}
              width={400}
              height={400}
              alt="."
              className={imagen === '' ? 'hidden' : ' w-4/5 mb-5 rounded-xl object-contain'}
            />
            </section>
        </DialogBody>
        <DialogFooter className="space-x-2 overflow-y-scroll ">

         
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}