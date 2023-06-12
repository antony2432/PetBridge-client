import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
   
export default function ButtonOpcion() {
  const labelProps = {
    variant: 'small',
    color: 'blue-gray',
    className:
        'absolute w-16 top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal',
  };
   
  return (
      <div className="relative h-80 w-full ">
        <div className="absolute bottom-0 right-0">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction className="relative">
                <TrashIcon className="h-5 w-5" />
                <Typography {...labelProps}>Editar</Typography>
              </SpeedDialAction>
              <SpeedDialAction className="relative">
                <CogIcon className="h-5 w-5" />
                <Typography {...labelProps}>Eliminar</Typography>
              </SpeedDialAction>
              <SpeedDialAction className="relative">
                <Square3Stack3DIcon className="h-5 w-5" />
                <Typography {...labelProps}>Pages</Typography>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
  );
}