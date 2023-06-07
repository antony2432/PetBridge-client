import { IFieldPassword } from '@/components/InputPassword/interface/IInputPassword.interface';

export interface IField {
  nameOfFoundation: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  phone: string;
  address: string;
  image: File | null | undefined;
  dateStart: string;
  document: File | null | undefined;
  description: string;
}

export interface IFieldError {
  nameOfFoundation: boolean;
  email: boolean;
  password: IFieldPassword;
  confirmPassword: boolean;
  country: boolean;
  phone: boolean;
  address: boolean;
  image: boolean;
  dateStart: boolean;
  document: boolean;
  description: boolean;
}
