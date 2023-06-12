import { IUserRegistrationFormError } from './IUseUserRegistrationForm.interface';

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
