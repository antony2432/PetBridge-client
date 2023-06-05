interface IPassword {
  upper: boolean;
  especial: boolean;
  number: boolean;
  isTrue: boolean;
  length: boolean;
}

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
  password: IPassword;
  confirmPassword: boolean | null;
}