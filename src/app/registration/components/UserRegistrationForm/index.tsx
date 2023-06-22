import {
  Button,
  Input,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Timeline,
} from '@material-tailwind/react';
import { BsGoogle } from 'react-icons/bs';
import useUserRegistrationForm from '../../hook/useUserRegistrationForm';
import { IItemPasswordSection, IPasswordSection } from '../../interface/IUserRegistrationProps';
import { signIn } from 'next-auth/react';

function ItemPasswordSection({ error, TSuccess, TError, final = true }: IItemPasswordSection) {
  return (
    <TimelineItem>
      <TimelineConnector />
      <TimelineHeader className="h-3">
        <TimelineIcon color={error ? 'green' : 'red'} />
        <span
          className={`text-xs leading-none transition-colors ${
            error ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {error ? TSuccess : TError}
        </span>
      </TimelineHeader>
      {final ? <TimelineBody /> : null}
    </TimelineItem>
  );
}

function PasswordSection({ error, onChange }: IPasswordSection) {
  return (
    <label>
      <Input type="password" label="Contraseña" color="brown" name="password" onChange={onChange} />
      {error.password.isTrue ? null : (
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

export default function UserRegistrationForm() {
  const { submitUserRegistrationForm, fieldError, onChange, enable } = useUserRegistrationForm();

  const renderErrorMessage = (fieldName: keyof typeof fieldError, errorMessage: string) => {
    if (fieldError[fieldName] && fieldError[fieldName]) {
      return null;
    }
    return <span className="text-xs text-red-400">{errorMessage}</span>;
  };

  return (
    <article className="flex flex-col gap-5 justify-center items-center">
      <section className="w-full my-4 flex flex-col gap-2">
        <label>
          <Input label="Nombre" color="brown" name="firstName" onChange={onChange} />
          {renderErrorMessage('firstName', 'Este campo tiene que estar lleno')}
        </label>
        <label>
          <Input label="Apellido" color="brown" name="lastName" onChange={onChange} />
          {renderErrorMessage('lastName', 'Este campo tiene que estar lleno')}
        </label>
        <label>
          <Input label="Correo" color="brown" name="email" onChange={onChange} />
          {renderErrorMessage('email', 'Tiene que ser un email válido')}
        </label>
        <PasswordSection error={fieldError} onChange={onChange} />
        <label>
          <Input
            label="Repite la Contraseña"
            color="brown"
            name="confirmPassword"
            type="password"
            onChange={onChange}
          />
          {renderErrorMessage('confirmPassword', 'Tiene que ser el mismo que contraseña')}
        </label>
      </section>
      <Button
        fullWidth
        className="bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50"
        onClick={submitUserRegistrationForm}
        disabled={enable}
      >
        Registrate
      </Button>
      <section className="w-full flex flex-col gap-5">
        <hr />
        <section>
          <Button
            variant="outlined"
            color="blue-gray"
            className="flex items-center justify-center gap-3"
            fullWidth
            onClick={() => signIn('google', { callbackUrl: '/def' })}
          >
            <BsGoogle className="w-6 h-6 text-red-400" />
            Registrate con google
          </Button>
        </section>
      </section>
    </article>
  );
}
