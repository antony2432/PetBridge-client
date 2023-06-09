import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from '@material-tailwind/react';
import {
  Cog6ToothIcon,
  PowerIcon,

  UserCircleIcon,

} from '@heroicons/react/24/outline';
import useNavBar from './hook/useNavBar';
import Link from 'next/link';
import useUserSesion from '@/hook/userSesion';
import { GetByName } from '@/redux/thunk';
import { useAppDispatch } from '@/redux/hook';
import { useRouter } from 'next/navigation';

export default function MenuProfile({ image, fullname }:any) {
  const { logout } = useNavBar();
  const { sesion } = useUserSesion();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlerClick = () => {
    dispatch(GetByName(sesion));
    const currentPath = window.location.pathname;
    console.log(currentPath);
    if (currentPath === '/profile') {
      window.location.reload();
    } else {
      router.push('/profile');
    }
  };

  return (
      <Menu>
        <MenuHandler>
          <Avatar
            variant="circular"
            className="cursor-pointer"
            src={image ? image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'}
            alt={fullname}
            size='sm'
          />
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2" onClick={handlerClick}>
            <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Link href={'/profile'} > <Typography variant="small" className="font-normal">
              Perfil
            </Typography></Link>
          </MenuItem>
          {sesion?.rol === 'fundation' ? <MenuItem className="flex items-center gap-2">
            <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Link href={'/myPets'}>  <Typography variant="small" className="font-normal">
            Mis Mascotas
            </Typography></Link>
          </MenuItem> : null}
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 ">
            <PowerIcon strokeWidth={2} className="h-4 w-4" />
            <Typography variant="small" className="font-normal" onClick={logout}>
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
  );
}