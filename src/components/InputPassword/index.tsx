import {
  Input,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from '@material-tailwind/react';
import { IInputPasswordProps, IItemPasswordSection } from './interface/IInputPassword.interface';
import React from 'react';

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

export default function InputPassword({ fieldPassword, handleChange, value }: IInputPasswordProps) {
  return (
    <label>
      <Input
        type="password"
        value={value}
        label="Contraseña"
        color="brown"
        name="password"
        onChange={handleChange}
      />
      {fieldPassword.isTrue ? null : (
        <Timeline className="mt-2 ml-2">
          <ItemPasswordSection
            error={fieldPassword.length}
            TError="Minimo 8 digitos"
            TSuccess="Cumple el minimo de digitos"
          />
          <ItemPasswordSection
            error={fieldPassword.upper}
            TError="Tiene que tener mayúscula"
            TSuccess="Cumple con mayúscula"
          />
          <ItemPasswordSection
            error={fieldPassword.number}
            TError="Tiene que tener un número"
            TSuccess="Cumple con número"
          />
          <ItemPasswordSection
            error={fieldPassword.especial}
            TError="No tiene caracter especial"
            TSuccess="Cumple con caracter especial"
            final={false}
          />
        </Timeline>
      )}
    </label>
  );
}
