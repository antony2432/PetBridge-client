import React from 'react';
import { IField, IFieldError } from "./IResetPasswordForm";

export interface IResetPasswordProps {
    activeStep:number;
    setActiveStep:React.Dispatch<React.SetStateAction<number>>;
    isLastStep:boolean;
    isFirstStep:boolean;
    seterLast:(value: boolean) => void;
    seterFirst:(value: boolean) => void;
    handleNext:() => void;
    handlePrev:() => void;
    enabled?:boolean;
    submitEmail:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    submitPassword:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    submitToken:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ISetProps {
    value: IField;
    fieldError: IFieldError;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    enable?: boolean;
  }