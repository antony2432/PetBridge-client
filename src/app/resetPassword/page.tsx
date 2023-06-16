import useResetFlow from './hook/useResetFlow';

export default function Page() {
    const {
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
    } = useResetFlow();
    return (
        <article></article>
    )
}