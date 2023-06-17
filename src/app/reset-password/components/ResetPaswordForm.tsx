import { IResetPasswordProps } from "../interface/IResetPasswordProps";

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
    
}