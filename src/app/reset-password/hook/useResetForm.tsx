import { useEffect, useState } from 'react';
import { IField, IFieldError } from '../interface/IResetPasswordForm';
import axios, { AxiosError } from 'axios';

export default function useResetForm() {
  const initialValue: IField = {
    email: '',
    password: '',
    confirmPassword: '',
    token: '',
  };
  const initialError: IFieldError = {
    email: true,
    password: {
      upper: false,
      especial: false,
      number: false,
      isTrue: true,
      length: false,
    },
    confirmPassword: true,
    token: true,
  };

  const [token, setToken] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
  const [field, setField] = useState(initialValue);
  const [fieldError, setFieldError] = useState(initialError);
  const [enabled, setEnabled] = useState(true);
  const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    const StringSesion = localStorage.getItem('resetPasswordSession');
    if (StringSesion) {
      let sesion = JSON.parse(StringSesion);
      setToken(sesion.token);
    }
  }, [fieldError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });

    //For email
    if (name === 'email') {
      setFieldError({
        ...fieldError,
        email: emilValidation.test(value),
      });
    }
    //For passwords
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

    //For verification tokens
    if (name === 'token') {
      setFieldError({
        ...fieldError,
        token: value.length === 251,
      });
    }
  };

  const submitEmail = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK}auth/forgot-password`, {
        email: field.email,
      });
      if (response.data.status >= 400) throw new Error(response.data.message);
      return true;
    } catch (err: any) {
      const isAxiosError = (some: any): some is AxiosError => {
        return some.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          alert(err.response?.data);
          console.log(err.response);
        }
      }
      alert(err.message);
      return false;
    }
  };

  const submitToken = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BACK}auth/verify-token`,
        null,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            code: `${field.token}`,
            Authorization: `Bearer ${field.token}`,
          },
        },
      );
      console.log(response);
      if (response.status >= 200) {
        const userData = response.data;
        localStorage.setItem('resetPasswordSession', JSON.stringify(userData));
        return true;
      }
      if (response.data.status >= 400) throw new Error(response.data.message);
    } catch (err: any) {
      const isAxiosError = (some: any): some is AxiosError => {
        return some.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          alert(err.response?.data);
          console.log(err.response);
        }
      }
      alert(err.message);
      return false;
    }
  };

  const submitPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      //http://localhost:3000/auth/create-password
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_BACK}auth/create-password`,
        { newPassword: field.password },
        {
          headers: {
            'Content-Type': 'application/json',
            reset: `${token}`,
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.status >= 400) throw new Error(response.data.message);
      return true;
    } catch (err: any) {
      const isAxiosError = (some: any): some is AxiosError => {
        return some.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          alert(err.response?.data);
          console.log(err.response);
        }
      }
      alert(err.message);
      return false;
    }
  };

  return {
    handleChange,
    field,
    fieldError,
    enabled,
    setEnabled,
    submitEmail,
    submitPassword,
    submitToken,
  };
}
