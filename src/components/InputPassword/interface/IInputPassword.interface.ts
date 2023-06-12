export interface IInputPasswordProps {
  value?: string;
  fieldPassword: IFieldPassword;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IItemPasswordSection {
  error: boolean;
  TSuccess: string;
  TError: string;
  final?: boolean;
}

export interface IFieldPassword {
  upper: boolean;
  especial: boolean;
  number: boolean;
  isTrue: boolean;
  length: boolean;
}
