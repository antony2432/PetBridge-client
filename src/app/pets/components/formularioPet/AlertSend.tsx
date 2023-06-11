import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
 
export default function ButtonSend({ datosEnviados }:any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => setOpen(!open);
 
  const handleClose = () => {
    router.push('/pets');
    setOpen(!open);
  };
  

  return (
    <Fragment>
      <Button className='m-10 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50' type='submit' value='Enviar' onClick={handleOpen} variant="gradient">
        Enviar formulario
      </Button>
      
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className='bg-white flex text-center w-full items-center justify-center '> <h2>Confirmar los Datos</h2></DialogHeader>
        <DialogBody divider className='bg-GoldenYellow-100'>
         <ul className='grid grid-cols-3 text-2xl  text-GoldenYellow-700 '>
            <li>Nombre: {datosEnviados.nombre}</li>
            <li>Pais: {datosEnviados.country}</li>
            <li>Ciudad: {datosEnviados.city}</li>
            <li>Estado: {datosEnviados.state}</li>
            <li>Edad: {datosEnviados.edad}{datosEnviados.edadUnidad}</li>
            <li>Tamaño: {datosEnviados.tamaño} KG</li>
            <li>Especie: {datosEnviados.especie}</li>
            <li>Genero: {datosEnviados.genero}</li>
            <li>Historia: {datosEnviados.descripcion}</li>
            <li>Telefono: {datosEnviados.telefono}</li>
            <Image src={datosEnviados.files} alt={datosEnviados.nombre} width={200} height={200}/>
         </ul>
        </DialogBody>
        <DialogFooter  className='bg-white gap-5'>
         
          <Button className=' bg-GoldenYellow-600 hover:shadow-lg hover:shadow-GoldenYellow-600/50'   onClick={handleClose}>
            <span >Confirmar datos</span>
          </Button>
          <Button className=' bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50' variant="gradient" color="red" onClick={handleOpen}>
            <span >cancelar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}