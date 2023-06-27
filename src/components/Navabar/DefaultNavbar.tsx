import Link from 'next/link';
import { BsList } from 'react-icons/bs';
import { paths } from './resource';
import { IPath } from './interface/path.interface';
import useNavBar from './hook/useNavBar';
import useUserSesion from '@/hook/userSesion';
// import { Avatar } from '@material-tailwind/react';
import MenuProfile from './menuProfile';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hook';
import axios from 'axios';

function PathList({ links }: { links: IPath[] }) {
  return (
    <>
      {links.map(({ label, route }, i) => (
        <li key={i} className="w-full px-4 py-1 rounded-md text-center hover:bg-OffWhite-500">
          <Link href={route} prefetch={true}>
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}

interface ILoginSectionProps {
  image: string;
  fullname: string;
}

function LoginSection({ image, fullname }: ILoginSectionProps) {
  return (
    <>
      <p>{fullname}</p>
      <MenuProfile image={image} fullname={fullname} />
    </>
  );
}

function ButtonSection({ sesion }: any) {
  const [userSesion, setUserSesion] = useState<any>();
  const { User } = useAppSelector(s => s.user);

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

  return (
    <>
      {sesion ? (sesion?.rol !== 'fundation' ?
        <LoginSection image={userSesion ? userSesion.image : sesion.image} fullname={`${userSesion ? userSesion.firstName : sesion.firstName} ${userSesion ? (userSesion.lastName ? userSesion.lastName : '' ) : sesion.lastName}`} /> :
        <LoginSection image={userSesion ? userSesion.image : sesion.image} fullname={`${userSesion ? userSesion.nameOfFoundation : sesion.nameOfFoundation} `} />

      ) : (
        <>
          <Link
            href="/login"
            className="px-6 py-1 hover:bg-OffWhite-500 hover:text-black rounded-full"
            prefetch={true}
          >
            Login
          </Link>
          <Link
            href="/registration"
            className="px-4 py-1 bg-DarkBrown-900 rounded-full text-white"
            prefetch={true}
          >
            Sign Up
          </Link>
        </>
      )}
    </>
  );
}

function MobileMenu({ links, sesion }: any) {
  return (
    <section className="w-full px-8 block top-[10vh] right-0 bg-white duration-300 border absolute z-1">
      <ul className="text-sm text-DarkBrown-900 mt-3  flex flex-col items-center gap-1">
        <PathList links={links} />
      </ul>
      <hr className="mx-8 mt-4 border border-GoldenYellow-500" />
      <section className="mb-2 mt-2 flex flex-col items-center text-sm gap-2 ">
        <ButtonSection sesion={sesion} />
      </section>
    </section>
  );
}

export default function DeafultNavbar() {
  const { isOpen, handleClosed } = useNavBar();
  const { sesion } = useUserSesion();
  const rol = sesion?.rol;

  return (
    <>
      <ul className="hidden text-sm text-DarkBrown-900 mt-3 lg:flex items-center gap-1">
        <PathList links={rol === 'admin' ? paths : paths.slice(0, 4)} />
      </ul>
      <section className="hidden lg:flex lg:items-center text-sm gap-8 z-1">
        <ButtonSection sesion={sesion} />
      </section>
      <BsList className="text-3xl text-DarkBrown-900 lg:hidden z-1" onClick={handleClosed} />

      {isOpen ? (
        <MobileMenu sesion={sesion} links={rol === 'admin' ? paths : paths.slice(0, 4)} />
      ) : null}
    </>
  );
}
