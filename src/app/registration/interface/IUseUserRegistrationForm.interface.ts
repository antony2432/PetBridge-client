import { IFieldPassword } from '@/components/InputPassword/interface/IInputPassword.interface';

export interface IUserRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserRegistrationFormError {
  firstName: boolean | null;
  lastName: boolean | null;
  email: boolean | null;
  password: IFieldPassword;
  confirmPassword: boolean | null;
}
