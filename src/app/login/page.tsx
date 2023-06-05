'use client';
import {
  Button,
  Input,
  Typography,
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineConnector,
  TimelineItem,
} from '@material-tailwind/react';
import { BsGoogle } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from './hook/useLogin';
import { IItemPasswordSection, PasswordSectionProps } from './interface/Ilogin.interface';

function ItemPasswordSection({ error, TSuccess, TError, final = true }: IItemPasswordSection) {
  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3">
        <TimelineIcon color={error ? 'red' : 'green'} />
        <span
          className={`text-xs leading-none transition-colors ${
            error ? 'text-red-400' : 'text-green-400'
          }`}
        >
          {!error ? TSuccess : TError}
        </span>
      </TimelineHeader>
      {final ? <TimelineBody /> : null}
    </TimelineItem>
  );
}

function PasswordSection({ error, onChange }: PasswordSectionProps) {
  return (
    <label>
      <Input
        size="lg"
        type="password"
        label="Contraseña"
        color="brown"
        error={error.password.show}
        success={error.password.success}
        name="password"
        onChange={onChange}
      />
      {error.password.show && (
        <Timeline className="mt-2 ml-2">
          <ItemPasswordSection
            error={error.password.length}
            TError="Tiene que tener minimo 8 digitos"
            TSuccess="Cumple el minimo de digitos"
          />
          <ItemPasswordSection
            error={error.password.upper}
            TError="Tiene que tener mayúscula"
            TSuccess="Cumple con mayúscula"
          />
          <ItemPasswordSection
            error={error.password.number}
            TError="Tiene que tener un número"
            TSuccess="Cumple con número"
          />
          <ItemPasswordSection
            error={error.password.especial}
            TError="Tiene que tener un caracter especial"
            TSuccess="Cumple con caracter especial"
            final={false}
          />
        </Timeline>
      )}
    </label>
  );
}

export default function Page() {
  const { onChange, error, handleSubmit, enabled } = useLogin();
  return (
    <main
      className="w-full h-full flex flex-grow  justify-center items-center"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      <article className="w-full h-full max-w-sm m-5 px-3 py-5 flex gap-5 items-center bg-white rounded-md shadow-lg sm:my-20 md:py-0 md:max-w-6xl md:px-0">
        <Image
          src="/img/login.jpeg"
          alt="image from login"
          width={295}
          height={400}
          className="hidden h-[400px] object-cover rounded-md md:block md:w-3/6 md:h-[600px] lg:w-4/6"
        />
        <form className="w-full max-w-sm py-5 px-5 flex flex-col gap-5 justify-center items-center md:w-3/6 lg:w-2/6">
          <h1 className="text-4xl font-extrabold text-DarkBrown-900 uppercase sm:text-2xl md:text-4xl">
            Inicia sesion
          </h1>
          <section className="w-full my-4 flex flex-col gap-4">
            <label>
              <Input
                size="lg"
                label="Correo"
                color="brown"
                error={Boolean(error.email.error)}
                success={Boolean(error.email.success)}
                name="email"
                onChange={onChange}
              />
              {error.email.error && (
                <span className="text-sm text-red-400">Tiene que ser un email valido</span>
              )}
            </label>
            <PasswordSection error={error} onChange={onChange} />
          </section>
          <Button
            fullWidth
            className="bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50"
            onClick={handleSubmit}
            disabled={enabled}
          >
            Acceso
          </Button>
          <section className="w-full flex flex-col gap-5">
            <hr />
            <section>
              <Button
                variant="outlined"
                color="blue-gray"
                className="flex items-center justify-center gap-3"
                fullWidth
              >
                <BsGoogle className="w-6 h-6 text-red-400" />
                Continua con google
              </Button>
              <Typography
                variant="small"
                color="gray"
                className="mt-3 font-medium transition-colors hover:text-blue-500"
              >
                <Link href="#">Olvidaste tu contraseña?</Link>
              </Typography>
            </section>
          </section>
        </form>
      </article>
    </main>
  );
}
