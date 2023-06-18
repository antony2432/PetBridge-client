import { useEffect, useState } from "react";
import { IField, IFieldError } from "../interface/IResetPasswordForm";
import axios, { AxiosError } from "axios";

export default function useResetForm() {
    const initialValue:IField = {
        email: '',
        password: '',
        confirmPassword: '',
        token: '',
    }
    const initialError:IFieldError = {
        email: true,
        password: {
            upper: false,
            especial: false,
            number: false,
            isTrue: true,
            length: false,
          },
        confirmPassword: true,
        token:true,
    }

    const [loading, setLoading] = useState(false);
    const [field, setField] = useState(initialValue);
    const [fieldError, setFieldError] = useState(initialError);
    const [enabled, setEnabled] = useState(true);
    const emilValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setField({ ...field, [name]: value });

        //For email
        if (name === 'email') {
            setFieldError({
                ...fieldError,
                email: emilValidation.test(value),
            })
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
                token: value.length === 389
            })
        }
    }

    const submitEmail = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      try {
        const response = await axios.post('localhost:3000/auth/forgot-password', {email:field.email})
      } catch (err) {
         const isAxiosError = (some: any): some is AxiosError => {
          return some.isAxiosError === true;
         };
         if (isAxiosError(err)) {
           if (err.response?.status === 400) {
             alert(err.response?.data);
             console.log(err.response);
           }
          }
        }
    }

    const submitToken = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      try {
        const response = await axios.post('localhost:3000/auth/verify-token',null,{
          headers:{
            'Content-Type': 'multipart/form-data',
            'code':`${field.token}`
          }
        })

        if (response.status >= 200) {
          const userData = response.data;
          localStorage.setItem('resetPasswordSession', JSON.stringify(userData));
          console.log(response.data);
        } 
      } catch (err) {
        const isAxiosError = (some: any): some is AxiosError => {
          return some.isAxiosError === true;
         };
         if (isAxiosError(err)) {
           if (err.response?.status === 400) {
             alert(err.response?.data);
             console.log(err.response);
           }
          }
      }
    }

    const submitPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      try {
        //const response = await axios.
      } catch (err) {
        const isAxiosError = (some: any): some is AxiosError => {
          return some.isAxiosError === true;
         };
         if (isAxiosError(err)) {
           if (err.response?.status === 400) {
             alert(err.response?.data);
             console.log(err.response);
           }
          }
      }
    }

    useEffect(() => {
        if (
          fieldError.password.especial &&
          fieldError.password.length &&
          fieldError.password.number &&
          fieldError.password.upper &&
          fieldError.email &&
          fieldError.confirmPassword &&
          fieldError.token
        ) {
          setEnabled(false);
        } else {
          setEnabled(true);
        }
      }, [fieldError]);

    return {
        handleChange,
        field,
        fieldError,
        enabled,
        submitEmail,
        submitPassword,
        submitToken,
    }
}