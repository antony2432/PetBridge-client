import React from 'react';

export interface IResetPasswordProps {
    activeStep:number;
    setActiveStep:React.Dispatch<React.SetStateAction<number>>;
    isLastStep:boolean;
    isFirstStep:boolean;
    seterLast:(value: boolean) => void;
    seterFirst:(value: boolean) => void;
    handleNext:() => void;
    handlePrev:() => void;
}