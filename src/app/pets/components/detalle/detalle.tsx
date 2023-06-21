import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import CarouselPet from '../Carousel';
import './../style.css';
// import { useAppDispatch } from '@/redux/hook';
// import { fetchAllPetsId } from '@/redux/slice/pets';
export default function DetallePet({ info }: any) {
  const [open, setOpen] = useState(false);
  // const dispatch = useAppDispatch();
  // const id = info.id;
  // useEffect(() => {
  //   dispatch(fetchAllPetsId(id));

  // }, [dispatch]);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <section onClick={handleOpen} className="text-center cursor-pointer first-letter:uppercase">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-2 overflow-hidden max-h-12 text-GoldenYellow-600"
        >
          {info.name}
        </Typography>
        <Typography className=" text-xl font-semibold text-black" textGradient>
          {info.gender}
        </Typography>
        <h3 className="text-xl text-GoldenYellow-600">
          {info.country}/{info.state}
        </h3>
      </section>
      <Dialog
        open={open}
        handler={handleOpen}
        className="first-letter:uppercase bg-GoldenYellow-500 border-2 border-black max-w-[100%] min-w-[100%] 2xl:min-w-[60%] 2xl:w-[60%] lg:max-w-[40%] m-0 p-0  w-screen absolute h-screen min-h-screen max-h-screen sm:h-max sm:min-h-max overflow-y-scroll lg:max-h-[900px] scroll-chido"
      >
        <DialogHeader className="flex flex-col justify-end items-end text-center  ">
          <Button
            className=" text-white bg-DarkBrown-700 hover:shadow-lg hover:shadow-DarkBrown-700/50 absolute top-4"
            onClick={handleOpen}
          >
            cerrar
          </Button>
          <h2 className="text-5xl w-full h-full text-[#3d2a1d] p-8">Mi nombre es {info.name}!</h2>
        </DialogHeader>
        <DialogBody divider className=" bg-white px-0 py-1 gap-2 ">
          <CarouselPet images={info.image} />

          <Card className=" row-span-1 w-full bg-GoldenYellow-100 h-[25vh]">
            <CardBody>
              <Typography className="flex flex-col gap-5 ">
                <h3 className="text-center p-5 font-extrabold text-2xl ">MI HISTORIA</h3>
                <p className="flex justify-center items-center"> {info.description}</p>
              </Typography>
            </CardBody>
          </Card>

          <section className="my-4">
            <div className="flex flex-col  xl:grid  xl:grid-cols-2">
              <Card className=" w-full">
                <CardBody>
                  <Typography className="flex flex-col my-5 h-[25vh] ">
                    <h3 className="text-center p-5 font-extrabold text-2xl ">Contacto</h3>
                    <p className="flex justify-center items-center">
                      {' '}
                      Informacion de contacto como whatsapp etc
                    </p>
                  </Typography>
                </CardBody>
              </Card>
              <section className="pt-5 bg-GoldenYellow-100">
                <h2 className="font-extrabold text-3xl text-center p-5 ">Acerca de mi</h2>
                <ul className="text-xl grid grid-cols-2 justify-center items-center gap-5 ml-[12%] ">
                  <li>Sexo: {info.gender}</li>
                  <li>Edad: {info.age_Y} años</li>
                  <li>Peso: {info.weight}kg</li>
                  <li className="flex">
                    Pais:<h3 className="first-letter:uppercase">{info.country}</h3>
                  </li>
                  <li className="flex">
                    Estado: <h3 className="first-letter:uppercase">{info.state}</h3>
                  </li>
                  <li className="flex">
                    Ciudad: <h3 className="first-letter:uppercase">{info.city}</h3>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </DialogBody>
      </Dialog>
    </>
  );
}
