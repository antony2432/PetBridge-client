import React, { useState } from 'react';

export default function useRegistrationFlow() {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return {
    loading,
    onChangeSwitch,
    isChecked,
    activeStep,
    handleNext,
    handlePrev,
    setIsLastStep,
    setIsFirstStep,
    isLastStep,
    isFirstStep,
    setActiveStep,
  };
}
