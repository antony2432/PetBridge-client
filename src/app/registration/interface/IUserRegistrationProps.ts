import { IUserRegistrationFormError } from './IuseUserRegistrationForm';

export interface IItemPasswordSection {
  error: boolean;
  TSuccess: string;
  TError: string;
  final?: boolean;
}

export interface IPasswordSection {
  error: IUserRegistrationFormError;
  onChange: any;
}
