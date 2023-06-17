import { Step, Button, Stepper } from "@material-tailwind/react";
import { IResetPasswordProps } from "../../interface/IResetPasswordProps";


export default function StepperReset({
    activeStep,
    setActiveStep,
    isLastStep,
    isFirstStep,
    seterLast,
    seterFirst,
    handleNext,
    handlePrev,
}: IResetPasswordProps) {
    return (
        <div className="w-full py-4 px-8 mt-10">
          <Stepper activeStep={activeStep} isLastStep={seterLast} isFirstStep={seterFirst}>
            <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
            <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
            <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
          </Stepper>
          <div className="mt-5 flex gap-4 justify-between">
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