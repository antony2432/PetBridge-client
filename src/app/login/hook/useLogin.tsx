import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IField, IFieldError } from '../interface/IHook.interface';
import { useAppDispatch } from '@/redux/hook';
import { setUser } from '@/redux/slice/user.slice';

export default function useLogin() {
  const initialField: IField = {
    email: null,
    password: null,
  };

  const initialError: IFieldError = {
    email: {
      error: false,
      success: false,
    },
    password: {
      upper: false,
      especial: false,
      number: false,
      show: false,
      success: false,
      length: false,
    },
  };

  const [field, setfiled] = useState(initialField);
  const [error, setError] = useState(initialError);
  const [enabled, setEnabled] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setfiled({ ...field, [name]: value });

    if (name === 'email') {
      const isEmailInvalid = !emilValidation.test(value);

      setError((prev) => ({
        ...prev,
        email: { error: isEmailInvalid, success: !isEmailInvalid },
      }));
    }

    if (name === 'password') {
      const isUpperCaseMissing = !/[A-Z]/.test(value);
      const isNumberMissing = !/[0-9]/.test(value);
      const isSpecialCharMissing = !/(?=.*?[#?!@$ %^&*-])/.test(value);
      const isLength = !(value.length >= 8);
      const shouldShow = isUpperCaseMissing || isNumberMissing || isSpecialCharMissing || isLength;
      const isSucees =
        !isUpperCaseMissing && !isNumberMissing && !isSpecialCharMissing && !isLength;

      setError((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          upper: isUpperCaseMissing,
          number: isNumberMissing,
          especial: isSpecialCharMissing,
          show: shouldShow,
          success: isSucees,
          length: isLength,
        },
      }));
    }
  };

  useEffect(() => {
    if (error.email.success && error.password.success) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [error]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const result = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(field),
      });
      const data = await result.json();
      if (result.ok) {
        const dataUser = data.userInformation;
        dispatch(setUser(dataUser));
        router.push('/home');
      } else {
        alert(data.message);
      }
    } catch (errore: any) {
      console.log(errore.message);
    }
  };

  return {
    field,
    onChange,
    error,
    handleSubmit,
    enabled,
  };
}
