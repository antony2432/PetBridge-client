import InputLabel from "@/components/InputLabel";
import { IResetPasswordProps, ISetProps } from "../interface/IResetPasswordProps";
import InputPassword from "@/components/InputPassword";
import useResetForm from "../hook/useResetForm";
import StepperReset from './stepper'
import { useEffect } from "react";

function ResetPasswordStep1({ fieldError, handleChange, value }:ISetProps) {
    return (
        <>
            <h2>Introduzca la dirección de correo electrónico que usó al registrarse</h2>
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
            <h2>Le hemos enviado un token de verificación. Cópielo y luego péguelo en el campo requerido.</h2>
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
            <h2>Por último, crea tu nueva contraseña.</h2>
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
     {
        activeStep,
        setActiveStep,
        isLastStep,
        isFirstStep,
        seterLast,
        seterFirst,
        handleNext,
        handlePrev,
    }: IResetPasswordProps
) {
    let componentToShow;
    const { handleChange, field, fieldError, enabled, setEnabled, submitEmail, submitPassword, submitToken } = useResetForm();

    //Por ser el único módulo en el que convergen las propiedades enabled, fieldError y activeStep
    useEffect(()=>{
        if (activeStep === 0) {
            if (fieldError.email && field.email.length) {
                setEnabled(false)
            } else {
                setEnabled(true)
            }
         } else if (activeStep === 1) {
            if ( fieldError.token) {
                setEnabled(false)
            } else {
                setEnabled(true)
            }
         } else if(activeStep === 2) {
            if (fieldError.password.especial &&
                fieldError.password.length &&
                fieldError.password.number &&
                fieldError.password.upper &&
                fieldError.confirmPassword
                ) {
                    setEnabled(false)
                } else { setEnabled(true) }
         }
        
    }, [fieldError])

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
            <StepperReset 
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            isLastStep={isLastStep}
            isFirstStep={isFirstStep}
            seterLast={seterLast}
            seterFirst={seterFirst}
            handleNext={handleNext}
            handlePrev={handlePrev}
            enabled={enabled}
            submitEmail={submitEmail}
            submitPassword={submitPassword}
            submitToken={submitToken}
            />
        </article>
    )
}