import { IFieldPassword } from "@/components/InputPassword/interface/IInputPassword.interface";

export interface IField {
    email:string;
    password:string;
    confirmPassword:string;
    token:string;
}

export interface IFieldError {
    email: boolean;
    password: IFieldPassword;
    confirmPassword: boolean;
    token:boolean;
}