import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  Typography,
  SpeedDialAction,
 
} from '@material-tailwind/react';
import {
  CogIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';



import Link from 'next/link';
import { useAppDispatch } from '@/redux/hook';
import { setId } from '@/redux/slice/pets';
import Eliminar from './components/deletePet/Eliminar';
import { labelProps } from './components/labelProps';


export default function ButtonOpcion({ idPet }: any) {
  const dispatch = useAppDispatch();
  const handleId = ()=>{
    dispatch(setId(idPet));
    console.log(idPet);
  };

  return (
    <div className=" h-80 w-full absolute bottom-0 right-0 ">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="sm" color='orange' className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <Eliminar idPet={idPet}/>
          <Link href='/editPet'>   <SpeedDialAction className="relative">
             <CogIcon className="h-5 w-5" onClick={handleId} />
              <Typography {...labelProps} ><p className='bg-black text-white rounded-xl'>Editar</p></Typography>
            </SpeedDialAction></Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
