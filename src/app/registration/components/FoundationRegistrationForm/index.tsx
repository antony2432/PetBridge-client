import React from 'react';
import { Button, Input, Textarea } from '@material-tailwind/react';
import StepperNavigation from '../Stepper';
import { IFoundationRegisterProps } from '../../interface/IFoundationRegisterProps.interface';

function FoundationRegisterStep1() {
  return (
    <>
      <Input label="Nombre de fundacion" color="brown" />
      <Input label="Email" color="brown" />
      <Input label="Contraseña" type="password" color="brown" />
      <Input label="Repite la contraseña" type="password" color="brown" />
    </>
  );
}

function FoundationRegisterStep2() {
  return (
    <>
      <Input label="Pais" color="brown" />
      <Input label="Telefono" type="tel" color="brown" />
      <Input label="Direccion" color="brown" />
      <Input label="Imagen" type="file" color="brown" className="text-xs" />
      <Input label="Inicio de la fundacion" type="date" color="brown" />
    </>
  );
}

function FoundationRegisterStep3() {
  return (
    <>
      <Input label="Documento" type="file" color="brown" className="text-xs" />
      <Textarea label="Descripcion" color="brown" />
      <Button
        fullWidth
        className="mt-5 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50"
      >
        Registrate
      </Button>
    </>
  );
}

export default function FoundationRegistrationForm({
  activeStep,
  setIsLastStep,
  setIsFirstStep,
  setActiveStep,
  handleNext,
  handlePrev,
  isFirstStep,
  isLastStep,
}: IFoundationRegisterProps) {
  let componentToShow;

  switch (activeStep) {
    case 0:
      componentToShow = <FoundationRegisterStep1 />;
      break;
    case 1:
      componentToShow = <FoundationRegisterStep2 />;
      break;
    case 2:
      componentToShow = <FoundationRegisterStep3 />;
      break;
    default:
      componentToShow = null;
  }

  return (
    <article className="flex flex-col items-center gap-3">
      {componentToShow}
      <StepperNavigation
        activeStep={activeStep}
        setIsLastStep={setIsLastStep}
        setIsFirstStep={setIsFirstStep}
        setActiveStep={setActiveStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      />
    </article>
  );
}
