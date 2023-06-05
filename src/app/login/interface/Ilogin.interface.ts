import { IFieldError } from './IHook.interface';

export interface PasswordSectionProps {
  error: IFieldError;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IItemPasswordSection {
  error: boolean;
  TSuccess: string;
  TError: string;
  final?: boolean;
}
