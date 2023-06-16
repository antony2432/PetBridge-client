import { useState } from 'react';

export default function useResetFlow() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
    const seterLast = (value: boolean) => setIsLastStep(value);
    const seterFirst = (value: boolean) => setIsFirstStep(value);

    return {
        activeStep,
        setActiveStep,
        isLastStep,
        setIsLastStep,
        isFirstStep,
        setIsFirstStep,
        handleNext,
        handlePrev,
        seterLast,
        seterFirst,
    }
}