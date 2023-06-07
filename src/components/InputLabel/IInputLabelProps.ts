export interface IInputLabelProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  errorMessage: string;
  fieldError: boolean;
  accept?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}