import React from 'react';

export interface IFoundationRegisterProps {
  activeStep: number;
  setIsLastStep: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFirstStep: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
  handlePrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}
