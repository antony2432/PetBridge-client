import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface IField {
  nameOfFoundation: string;
  email: string;
  password: string;
  country: string;
  phone: number;
  address: string;
  image: string;
  dateStart: string;
  document: string;
  description: string;
}

interface IFieldError {
  nameOfFoundation: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  country: boolean;
  phone: boolean;
  address: boolean;
  image: boolean;
  dateStart: boolean;
  document: boolean;
  description: boolean;
}

export default function useFoundationRegistrationForm() {
  const initialValue: IField = {
    nameOfFoundation: '',
    email: '',
    password: '',
    country: '',
    phone: 0,
    address: '',
    image: '',
    dateStart: '',
    document: '',
    description: '',
  };

  const initialError: IFieldError = {
    nameOfFoundation: true,
    email: true,
    password: true,
    confirmPassword: true,
    country: true,
    phone: true,
    address: true,
    image: true,
    dateStart: true,
    document: true,
    description: true,
  };

  const [field, setField] = useState(initialValue);
  const [fieldError, setFieldError] = useState(initialError);
  const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const router = useRouter();

  const isValidateDAte = (fecha: string) => {
    const fechaActual: Date = new Date();
    const fechaMinima: Date = new Date('1950-01-01');
    const fechaIngresada: Date = new Date(fecha);

    if (fechaIngresada < fechaMinima || fechaIngresada > fechaActual) return false;

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });

    if (name === 'nameOfFoundation') {
      setFieldError({
        ...fieldError,
        nameOfFoundation: value.length !== 0,
      });
    }

    if (name === 'email') {
      setFieldError({
        ...fieldError,
        email: emilValidation.test(value),
      });
    }

    if (name === 'password') {
      setFieldError({
        ...fieldError,
        password: value.length !== 0,
      });
    }

    if (name === 'confirmPassword') {
      setFieldError({
        ...fieldError,
        confirmPassword: field.password === value,
      });
    }

    if (name === 'country') {
      setFieldError({
        ...fieldError,
        country: value.length !== 0,
      });
    }

    if (name === 'phone') {
      setFieldError({
        ...fieldError,
        phone: value.length !== 0 && value.length <= 11,
      });
    }

    if (name === 'address') {
      setFieldError({
        ...fieldError,
        address: value.length !== 0,
      });
    }

    if (name === 'image') {
      setFieldError({
        ...fieldError,
        image: value.length !== 0,
      });
    }

    if (name === 'dateStart') {
      setFieldError({
        ...fieldError,
        dateStart: isValidateDAte(value),
      });
    }

    if (name === 'document') {
      setFieldError({
        ...fieldError,
        document: value.length !== 0,
      });
    }

    if (name === 'description') {
      setFieldError({
        ...fieldError,
        description: value.length !== 0,
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(field);
    router.push('/home');
  };
  return {
    handleChange,
    handleSubmit,
  };
}
