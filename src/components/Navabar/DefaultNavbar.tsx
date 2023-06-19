import Link from 'next/link';
import { BsList } from 'react-icons/bs';
import { paths } from './resource';
import { IPath } from './interface/path.interface';
import useNavBar from './hook/useNavBar';
import useUserSesion from '@/hook/userSesion';
import { Avatar } from '@material-tailwind/react';

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
  const { logout } = useNavBar();
  return (
    <>
      <p>{fullname}</p>
      <Avatar src={image ? image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png'} alt={fullname} size='sm'/>
      <button className='rounded-md border duration-200 px-4 py-2 text-red-600 border-red-400 hover:border-red-600 hover:bg-red-100' onClick={logout}>Log out</button>
    </>
  );
}

function ButtonSection({ sesion }: any) {
  return (
    <>
      {sesion ? sesion.email? (
        <LoginSection image={sesion.image} fullname={`${sesion.firstName} ${sesion.lastName}`}/>
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
      ) : null}
    </>
  );
}

function MobileMenu({ links, sesion }: any) {
  return (
    <section className="w-full px-8 absolute top-[10vh] right-0 bg-white duration-300 border lg:hidden">
      <ul className="text-sm text-DarkBrown-900 mt-3  flex flex-col items-center gap-1">
        <PathList links={links} />
      </ul>
      <hr className="mx-8 mt-4 border border-GoldenYellow-500" />
      <section className="mb-2 mt-2 flex flex-col items-center text-sm gap-2">
        <ButtonSection sesion={sesion}/>
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
      <section className="hidden lg:flex lg:items-center text-sm gap-8">
        <ButtonSection sesion={sesion} />
      </section>
      <BsList className="text-3xl text-DarkBrown-900 lg:hidden" onClick={handleClosed} />

      {isOpen ? <MobileMenu sesion={sesion} links={rol === 'admin' ? paths : paths.slice(0, 4)} /> : null}
    </>
  );
}
