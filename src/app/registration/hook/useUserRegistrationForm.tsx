import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import {
  IUserRegistrationForm,
  IUserRegistrationFormError,
} from '../interface/IUseUserRegistrationForm.interface';

export default function useUserRegistrationForm() {
  const initialValue: IUserRegistrationForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const initialError: IUserRegistrationFormError = {
    firstName: true,
    lastName: true,
    email: true,
    password: {
      upper: false,
      especial: false,
      number: false,
      isTrue: true,
      length: false,
    },
    confirmPassword: true,
  };

  const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [field, setField] = useState(initialValue);
  const [fieldError, setFieldError] = useState(initialError);
  const [enable, setEnable] = useState(true);
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });

    if (name === 'firstName') {
      setFieldError({
        ...fieldError,
        firstName: value.length !== 0,
      });
    }

    if (name === 'lastName') {
      setFieldError({
        ...fieldError,
        lastName: value.length > 0,
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
  };

  const submitUserRegistrationForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(field).forEach(([key, value]) => {
      if (key !== 'confirmPassword') {
        formData.append(key, value);
      }
    });

    formData.append('rol', 'user');
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK!}/auth/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) return router.push('/login');
      const data = response.data;
      alert(data.error);
    } catch (err) {
      const isAxiosError = (some: any): some is AxiosError => {
        return some.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        if (err.response?.status === 400) alert(err.response?.data);
      }
    }
  };

  useEffect(() => {
    if (
      fieldError.firstName &&
      fieldError.email &&
      fieldError.lastName &&
      fieldError.confirmPassword &&
      fieldError.password.especial &&
      fieldError.password.upper &&
      fieldError.password.length &&
      fieldError.password.number
    ) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [fieldError]);

  return {
    onChange,
    fieldError,
    submitUserRegistrationForm,
    enable,
  };
}
