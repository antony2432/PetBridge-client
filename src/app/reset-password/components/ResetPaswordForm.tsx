import InputLabel from "@/components/InputLabel";
import { IResetPasswordProps, ISetProps } from "../interface/IResetPasswordProps";
import InputPassword from "@/components/InputPassword";
import useResetForm from "../hook/useResetForm";

function ResetPasswordStep1({ fieldError, handleChange, value }:ISetProps) {
    return (
        <>
            <InputLabel 
            value={value.email}
            label='Email del usuario' 
            name='email' 
            errorMessage="Debe ser un email válido"
            fieldError={fieldError.email}
            onChange={handleChange} 
            />
        </>
    )
}

function ResetPasswordStep2({ fieldError, handleChange, value }:ISetProps) {
    return (
        <>
            <InputLabel 
            value={value.token}
            label='Token de verificación' 
            name='token' 
            errorMessage="Debe ser un token válido"
            fieldError={fieldError.token}
            onChange={handleChange} 
            />
        </>
    )
}

function ResetPasswordStep3({ fieldError, handleChange, value }:ISetProps) {
    return (
        <> 
            <InputPassword fieldPassword={fieldError.password} handleChange={handleChange} value={value.password}/>
            <InputLabel 
            value={value.confirmPassword}
            label='Confirmar contraseña' 
            name='confirmPassword' 
            errorMessage="la contraseña tiene que ser la misma"
            fieldError={fieldError.confirmPassword}
            onChange={handleChange} 
            />
        </>
    )
}


export default function ResetPasswordForm(
  /*   {
        activeStep,
        setActiveStep,
        isLastStep,
        isFirstStep,
        seterLast,
        seterFirst,
        handleNext,
        handlePrev,
    }: IResetPasswordProps */
) {
    let componentToShow;
    const { handleChange, field, fieldError } = useResetForm();
    
    const activeStep:number = 0;

    switch (activeStep) {
        case 0:
            componentToShow = <ResetPasswordStep1 fieldError={fieldError} handleChange={handleChange} value={field}/>
        break;
        case 1:
            componentToShow = <ResetPasswordStep2 fieldError={fieldError} handleChange={handleChange} value={field}/>
            break;
        case 2:
            componentToShow = <ResetPasswordStep3 fieldError={fieldError} handleChange={handleChange} value={field}/>
            break;
    }

    return (
        <article className="flex flex-col items-center gap-3 ">
            {componentToShow}
        </article>
    )
}