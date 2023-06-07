import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IField, IFieldError } from '../interface/IUseFoundationRegistrationForm.interface';

export default function useFoundationRegistrationForm() {
  const initialValue: IField = {
    nameOfFoundation: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    phone: '',
    address: '',
    image: null,
    dateStart: '',
    document: null,
    description: '',
  };

  const initialError: IFieldError = {
    nameOfFoundation: true,
    email: true,
    password: {
      upper: false,
      especial: false,
      number: false,
      isTrue: true,
      length: false,
    },
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
  const [enable, setEnable] = useState(true);
  const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const router = useRouter();

  const isValidateDAte = (fecha: string) => {
    const fechaActual: Date = new Date();
    const fechaMinima: Date = new Date('1950-01-01');
    const fechaIngresada: Date = new Date(fecha);

    if (fechaIngresada < fechaMinima || fechaIngresada > fechaActual) return false;

    return true;
  };

  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0];
    setField({ ...field, [name]: file });
    if (name === 'image') {
      setFieldError({
        ...fieldError,
        image: file !== undefined,
      });
    }

    if (name === 'document') {
      setFieldError({
        ...fieldError,
        document: file !== undefined,
      });
    }
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
      const isUpperCaseMissing = /[A-Z]/.test(value);
      const isNumberMissing = /[0-9]/.test(value);
      const isSpecialCharMissing = /(?=.*?[#?!@$ %^&*-])/.test(value);
      const isLength = value.length >= 8;
      const isIsTrue = isUpperCaseMissing && isNumberMissing && isSpecialCharMissing && isLength;
      setFieldError((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          upper: isUpperCaseMissing,
          number: isNumberMissing,
          especial: isSpecialCharMissing,
          isTrue: isIsTrue,
          length: isLength,
        },
        confirmPassword: field.password === value,
      }));
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

    if (name === 'dateStart') {
      setFieldError({
        ...fieldError,
        dateStart: isValidateDAte(value),
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

  useEffect(() => {
    if (
      fieldError.password.especial &&
      fieldError.password.length &&
      fieldError.password.number &&
      fieldError.password.upper &&
      fieldError.nameOfFoundation &&
      fieldError.email &&
      fieldError.confirmPassword &&
      fieldError.country &&
      fieldError.phone &&
      fieldError.image &&
      fieldError.dateStart &&
      fieldError.document &&
      fieldError.description
    ) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [fieldError]);

  return {
    handleChange,
    handleSubmit,
    fieldError,
    enable,
    field,
    handleChangeFiles,
  };
}
