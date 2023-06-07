import { IFieldError, IField } from './IUseFoundationRegistrationForm.interface';

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

export interface ISetpProps {
  value: IField
  fieldError: IFieldError;
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleChangeFile?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  enable?: boolean;
}
