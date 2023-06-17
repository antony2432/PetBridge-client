import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LoginOrRegister() {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/registration' ? (
        <section className="flex gap-6 justify-center items-center">
          <p className="hidden sm:block">¿Ya tienes una cuenta?</p>
          <Link
            href="/login"
            className="text-lg text-GoldenYellow-500 font-semibold underline decoration-2 hover:no-underline"
          >
            Iniciar sesión
          </Link>
        </section>
      ) : (
        <section className="flex gap-6 justify-center items-center">
          <p className="hidden sm:block">¿No tienes una cuenta?</p>
          <Link
            href="/registration"
            className="text-lg text-GoldenYellow-500 font-semibold underline decoration-2 hover:no-underline"
          >
            Registrate
          </Link>
        </section>
      )}
    </>
  );
}
