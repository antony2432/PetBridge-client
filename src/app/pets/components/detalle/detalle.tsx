import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
  CardBody,
  Typography,
  DialogFooter,

} from '@material-tailwind/react';
import CarouselPet from '../Carousel';
import './../style.css';
export default function DetallePet({ info }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <Fragment>
      
      <section onClick={handleOpen} className="text-center cursor-pointer">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            {info.name}
          </Typography>
          <Typography color="blue" className=" text-xl font-semibold" textGradient>
            {info.gender}/tamaño
          </Typography>
          <h3
              className='text-xl'
              
              color="blue"
              
            >
              Informacion de la ciudad
            </h3>
        </section>
      <Dialog open={open} handler={handleOpen} className='bg-[#f0a83e] border-2 border-black max-w-[100%] min-w-[100%] 2xl:min-w-[60%] 2xl:w-[60%] lg:max-w-[40%] m-0 p-0  w-screen absolute h-screen min-h-screen max-h-screen sm:h-max sm:min-h-max '>
        <DialogHeader className='flex flex-col justify-end items-end text-center '>
        <Button
        className=" text-white  bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50"
        onClick={handleOpen}
      >
        cerrar
      </Button>
      <h2 className="text-3xl w-full h-full text-[#1f120a]">Mi nombre es {info.name}!</h2></DialogHeader>
        <DialogBody divider className=" bg-[#f9f4f1] px-0 py-1 ">
          <section className='grid xl:grid-cols-2 h-1/2 item-center  justify-center border text-center'>
            <CarouselPet />


            <Card className=" w-full">
              <CardBody>
                <Typography className='flex flex-col gap-5 '>
                  <h3 className='text-center p-5 font-extrabold text-2xl '>MI HISTORIA</h3>
                  <p className='flex justify-center items-center'> {info.description}</p>
                </Typography>
              </CardBody>
            </Card>
          </section>
          <section>
            <div className='flex flex-col-reverse  xl:grid  xl:grid-cols-2'> 
            <Card className=" w-full">
      <CardBody>
        <Typography className='flex flex-col gap-5 '>
            <h3 className='text-center p-5 font-extrabold text-2xl '>Contacto</h3>
            <p className='flex justify-center items-center'> Informacion de contacto como whatsapp etc</p>
        </Typography>
      </CardBody>
    </Card>
              <section className='p-5'>
            <h2 className='font-extrabold text-3xl text-center p-5 '>Acerca de mi</h2>
            <ul className='text-xl grid grid-cols-2 justify-center items-center gap-5 ml-[12%] '>
              <li>Sexo: {info.gender}</li>
              <li>Color: Verde</li>
              <li>Edad: 2 Meses</li>
              <li>Peso: 10kg</li>
              <li>Ubicacion: Brasil sao paulo</li>

            </ul></section>
  </div>
          </section>
       
        </DialogBody>
       <DialogFooter className='h-20'>

       </DialogFooter>
          

        
      </Dialog>
    </Fragment>
  );
}