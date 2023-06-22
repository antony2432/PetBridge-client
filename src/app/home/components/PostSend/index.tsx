'use client';
import {
  Avatar,
  Dialog,
  Button,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import useUserSesion from '@/hook/userSesion';
import usePost from '../../hook/usePost';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hook';
import axios from 'axios';

export default function PostSend() {
  const [userSesion, setUserSesion] = useState<any>();
  const { User } = useAppSelector(s => s.user);
  const { sesion } = useUserSesion();
  useEffect(() => {
    if (sesion) {
      try {
        const fetch = async () => {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/${sesion?.rol !== 'fundation' ? 'users' : 'asociaciones'}/${sesion?.id}`, {
            headers: {
              Authorization: `Bearer ${sesion?.token}`,
            },
          });
          setUserSesion(data);
        };
        fetch();
      } catch (error) {
        console.log(error);
      }
    }
  }, [User, sesion]);

  
  const imagen = userSesion ? userSesion.image : sesion?.image;
  const { isOpen, handleopen, error, onChange, nameOfFile, onChangeFile, isDisable, onSubmit } =
    usePost();
  return (
    <section className="max-w-4xl w-5/6 mt-4 bg-white flex gap-2  py-4 px-2 lg:px-5 rounded-2xl shadow-lg 2xl:w-full">
      <Avatar
        src={imagen ? imagen : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'}
        alt={`${sesion?.firstName} ${sesion?.lastName}`}
      />
      <input
        type="text"
        className="w-full border border-black py-2 rounded-md px-3 outline-none"
        onClick={handleopen}
      />
      <Dialog open={isOpen} handler={handleopen} size="xs">
        <DialogHeader className="flex justify-center">
          <h3>Crea tu Publicación</h3>
        </DialogHeader>
        <DialogBody divider className="flex flex-col gap-5 justify-center">
          <section className="flex gap-2 items-center">
            <Avatar
              size="sm"
              src={
                imagen ? imagen : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'
              }
              alt={`${sesion?.firstName} ${sesion?.lastName}`}
            />
            <p className="text-black font-semibold capitalize">
              {sesion?.firstName} {sesion?.lastName}
            </p>
          </section>
          <textarea
            cols={30}
            rows={10}
            name="description"
            placeholder={`Ques estas pensando ${sesion?.firstName} ?`}
            className="focus:outline-none text-black"
            onChange={onChange}
          />
          {error.description ? (
            <p className="text-sm text-red-400">Este campo tiene que estar lleno</p>
          ) : null}
          <label className="flex justify-center items-center border border-DarkBrown-800 py-3 rounded-md">
            <span>{nameOfFile ? nameOfFile : 'Selectiona tus imagenes'}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="file"
              onChange={onChangeFile}
            />
          </label>
          {error.file ? (
            <p className="text-sm text-red-400">Este campo tiene que estar lleno</p>
          ) : null}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="amber"
            fullWidth
            className="text-white"
            onClick={onSubmit}
            disabled={isDisable}
          >
            Crear
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
