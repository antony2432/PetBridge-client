export interface IField {
  email: string | null;
  password: string | null;
}

export interface IFieldError {
  email: IEmail;
  password: IPassword;
}

interface IEmail {
  error: boolean;
  success: boolean;
}

interface IPassword {
  upper: boolean;
  especial: boolean;
  number: boolean;
  show: boolean;
  success: boolean;
  length: boolean;
}