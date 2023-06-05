import React from 'react';
import { Stepper, Step, Button } from '@material-tailwind/react';
import { IFoundationRegisterProps } from '../../interface/IFoundationRegisterProps.interface';

export default function StepperNavigation({
  activeStep,
  setIsLastStep,
  setIsFirstStep,
  setActiveStep,
  handleNext,
  handlePrev,
  isFirstStep,
  isLastStep,
}: IFoundationRegisterProps) {
  return (
    <div className="w-full py-4 px-8 mt-10">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className="h-4 w-4 text-amber-500 bg-amber-500 shadow-md shadow-amber-500/50"
          onClick={() => setActiveStep(0)}
        />
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
      </Stepper>
      <div className="mt-5 flex gap-4 justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          size="sm"
          className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50"
        >
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastStep}
          size="sm"
          className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
