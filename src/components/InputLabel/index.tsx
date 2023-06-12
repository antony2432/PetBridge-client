import React from 'react';
import { Input } from '@material-tailwind/react';
import { IInputLabelProps } from './IInputLabelProps';

export default function InputLabel({
  fieldError,
  errorMessage,
  onChange,
  label,
  name,
  value,
  type = 'text',
  accept,
}: IInputLabelProps) {
  return (
    <label>
      <Input
        label={label}
        color="brown"
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        className={type === 'file' ? 'text-xs' : ''}
        accept={accept}
      />
      {fieldError && fieldError ? null : (
        <span className="text-xs text-red-400">{errorMessage}</span>
      )}
    </label>
  );
}
