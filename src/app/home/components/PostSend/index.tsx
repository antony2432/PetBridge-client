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

export default function PostSend() {
  const { sesion } = useUserSesion();
  const { isOpen, handleopen, error, onChange, nameOfFile, onChangeFile, isDisable, onSubmit } = usePost();
  return (
    <section className="max-w-4xl w-5/6 mt-4 bg-white flex gap-2  py-4 px-2 lg:px-5 rounded-2xl shadow-lg 2xl:w-full">
      <Avatar
        src={sesion?.image ? sesion.image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'}
        alt={`${sesion?.firstName} ${sesion?.lastName}`}
      />
      <input
        type="text"
        className="w-full border border-black py-2 rounded-md px-3 outline-none"
        onClick={handleopen}
      />
      <Dialog open={isOpen} handler={handleopen} size='xs'>
        <DialogHeader className="flex justify-center">
          <h3>Crea tu Publicación</h3>
        </DialogHeader>
        <DialogBody divider className="flex flex-col gap-5 justify-center">
          <section className="flex gap-2 items-center">
            <Avatar
              size="sm"
              src={
                sesion?.image ? sesion.image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'
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
          <Button variant="gradient" color="amber" fullWidth className="text-white" onClick={onSubmit} disabled={isDisable}>
            Crear
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
