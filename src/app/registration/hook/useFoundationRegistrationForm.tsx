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
        password: emilValidation.test(value),
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
        password: field.password === value,
      });
    }

    if (name === 'pais') {
      setFieldError({
        ...fieldError,
        password: field.password === value,
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
