import React from 'react';
import { Button, Textarea } from '@material-tailwind/react';
import StepperNavigation from '../Stepper';
import InputLabel from '@/components/InputLabel';
import {
  ISetpProps,
  IFoundationRegisterProps,
} from '../../interface/IFoundationRegistrationProps.interface';
import useFoundationRegistrationForm from '../../hook/useFoundationRegistrationForm';
import InputPassword from '@/components/InputPassword';

function FoundationRegisterStep1({ fieldError, handleChange, value }: ISetpProps) {
  return (
    <>
      <InputLabel
        value={value.nameOfFoundation}
        label="Nombre de fundacion"
        name="nameOfFoundation"
        onChange={handleChange}
        errorMessage="Este campo tiene que estar lleno"
        fieldError={fieldError.nameOfFoundation}
      />
      <InputLabel
        value={value.email}
        label="Email"
        name="email"
        onChange={handleChange}
        errorMessage="Tiene que ser un email valido"
        fieldError={fieldError.email}
      />
      <InputPassword fieldPassword={fieldError.password} handleChange={handleChange} value={value.password}/>
      <InputLabel
        name="confirmPassword"
        label="Repite la contraseña"
        onChange={handleChange}
        value={value.confirmPassword}
        errorMessage="la contraseña tiene que ser la misma"
        fieldError={fieldError.confirmPassword}
        type="password"
      />
    </>
  );
}

function FoundationRegisterStep2({
  fieldError,
  handleChange,
  value,
  handleChangeFile,
}: ISetpProps) {
  return (
    <>
      <InputLabel
        label="Pais"
        name="country"
        value={value.country}
        onChange={handleChange}
        errorMessage="Este campo tiene que estar lleno"
        fieldError={fieldError.country}
      />
      <InputLabel
        label="Telefono"
        name="phone"
        value={value.phone}
        onChange={handleChange}
        errorMessage="Tiene que ser un numero valido"
        fieldError={fieldError.phone}
      />
      <InputLabel
        label="Direccion"
        name="address"
        value={value.address}
        onChange={handleChange}
        errorMessage="Este campo tiene que estar lleno"
        fieldError={fieldError.address}
      />
      <label className="w-full px-3 py-[10px] max-w-[200px] border text-blue-gray-700 font-sans font-normal border-blue-gray-200 rounded-md">
        <p className="text-xs">{value.image?.name ? value.image?.name : 'Selecione su imagen'}</p>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChangeFile}
          name="image"
        />
      </label>
      {fieldError.image ? null : (
        <span className="text-xs text-red-400"> Este campo tiene que estar lleno</span>
      )}
    </>
  );
}

function FoundationRegisterStep3({
  fieldError,
  handleChange,
  handleSubmit,
  enable,
  value,
  handleChangeFile,
}: ISetpProps) {
  return (
    <>
      <InputLabel
        label="Fecha de inicio"
        name="dateStart"
        value={value.dateStart}
        type="date"
        onChange={handleChange}
        errorMessage="Tiene que ser una fecha valida"
        fieldError={fieldError.dateStart}
      />
      <label className="w-full px-3 py-[10px] max-w-[200px] border text-blue-gray-700 font-sans font-normal border-blue-gray-200 rounded-md overflow-hidden">
        <p className="text-xs">
          {value.document?.name ? value.document?.name : 'Selecione su documento'}
        </p>
        <input
          type="file"
          className="hidden"
          accept="application/pdf"
          onChange={handleChangeFile}
          name="document"
        />
      </label>
      {fieldError.document ? null : (
        <span className="text-xs text-red-400"> Este campo tiene que estar lleno</span>
      )}
      <Textarea
        label="Descripcion"
        color="brown"
        onChange={handleChange}
        name="description"
        value={value.description}
      />
      {fieldError.description ? null : (
        <span className="text-xs text-red-400">Tiene que ser una fecha valida</span>
      )}
      <Button
        fullWidth
        className="mt-5 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50"
        onClick={handleSubmit}
        disabled={enable}
      >
        Registrate
      </Button>
    </>
  );
}

export default function FoundationRegistrationForm({
  activeStep,
  setActiveStep,
  handleNext,
  handlePrev,
  isFirstStep,
  isLastStep,
  seterFirst,
  seterLast,
}: IFoundationRegisterProps) {
  let componentToShow;
  const { fieldError, handleChange, handleSubmit, enable, field, handleChangeFiles } =
    useFoundationRegistrationForm();

  switch (activeStep) {
    case 0:
      componentToShow = (
        <FoundationRegisterStep1
          fieldError={fieldError}
          handleChange={handleChange}
          value={field}
        />
      );
      break;
    case 1:
      componentToShow = (
        <FoundationRegisterStep2
          fieldError={fieldError}
          handleChange={handleChange}
          handleChangeFile={handleChangeFiles}
          value={field}
        />
      );
      break;
    case 2:
      componentToShow = (
        <FoundationRegisterStep3
          fieldError={fieldError}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleChangeFile={handleChangeFiles}
          enable={enable}
          value={field}
        />
      );
      break;
    default:
      componentToShow = null;
  }

  return (
    <article className="flex flex-col items-center gap-3 ">
      {componentToShow}
      <StepperNavigation
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        seterFirst={seterFirst}
        seterLast={seterLast}
      />
    </article>
  );
}
