import { useState } from "react";
import { IField, IFieldError } from "../interface/IResetPasswordForm";

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

    const [field, setField] = useState(initialValue);
    const [fieldError, setFieldError] = useState(initialError);
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

    return {
        handleChange,
        field,
        fieldError,
    }
}