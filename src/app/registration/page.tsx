'use client';
import React from 'react';
import Image from 'next/image';
import { Switch, Spinner } from '@material-tailwind/react';
import FoundationRegistrationForm from './components/FoundationRegistrationForm';
import UserRegistrationForm from './components/UserRegistrationForm';
import useRegistrationFlow from './hook/useRegistrationFlow';

export default function Page() {
  const {
    onChangeSwitch,
    loading,
    isChecked,
    activeStep,
    setIsLastStep,
    setIsFirstStep,
    setActiveStep,
    handleNext,
    handlePrev,
    isFirstStep,
    isLastStep,
  } = useRegistrationFlow();

  const renderRegistrationForm = () => {
    if (loading) {
      return <Spinner color="amber" className="w-12 h-12" />;
    } else if (isChecked) {
      return (
        <FoundationRegistrationForm
          activeStep={activeStep}
          setIsLastStep={setIsLastStep}
          setIsFirstStep={setIsFirstStep}
          setActiveStep={setActiveStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
        />
      );
    } else {
      return <UserRegistrationForm />;
    }
  };

  return (
    <main className="w-full h-full flex flex-grow justify-center items-center bg-gradient-to-b from-white via-gray-100 to-gray-300">
      <article className="w-full max-w-sm m-5 px-3 py-5 flex bg-white rounded-md shadow-lg sm:my-20 md:py-0 md:max-w-6xl md:px-0 border">
        <Image
          src="/img/register.jpeg"
          alt="image from login"
          width={295}
          height={400}
          className="hidden h-full object-cover rounded-md md:block md:w-3/6 lg:w-4/6 md:place-self-center"
        />
        <form className="w-full h-full max-w-sm py-5 px-5 flex flex-col gap-5 items-center md:w-3/6 md:mt-10 lg:w-2/6">
          <Switch label="Fundacion" className="self-end" color="amber" onChange={onChangeSwitch} />
          <h1 className="font-extrabold text-DarkBrown-900 text-2xl">Crea tu cuenta</h1>
          {renderRegistrationForm()}
        </form>
      </article>
    </main>
  );
}
