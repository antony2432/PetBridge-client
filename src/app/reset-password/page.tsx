'use client'
import Image from 'next/image';
import useResetFlow from './hook/useResetFlow';
import ResetPasswordForm from './components/ResetPaswordForm';

export default function Page() {
    const {
        activeStep,
        setActiveStep,
        isLastStep,
        isFirstStep,
        seterLast,
        seterFirst,
        handleNext,
        handlePrev,
    } = useResetFlow();
    return (
        <main className="w-full h-full flex flex-grow justify-center items-center bg-gradient-to-b from-white via-gray-100 to-gray-300">
            <article className="w-full max-w-sm m-5 px-3 py-5 flex items-stretch bg-white rounded-md shadow-lg sm:my-10 md:py-0 md:max-w-6xl md:px-0 border">
                <div className="flex-shrink-0 hidden md:block md:w-3/6 lg:w-4/6 md:place-self-center">
                    <Image src="/img/register.jpeg" alt="cute pets" width={295} height={400} className='w-full'/>
                </div>
                <form className="flex-grow w-full max-w-sm py-5 px-5 flex flex-col gap-5 justify-center items-center md:w-3/6 md:mt-10 lg:w-2/6">
                    <ResetPasswordForm 
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    isLastStep={isLastStep}
                    isFirstStep={isFirstStep}
                    seterLast={seterLast}
                    seterFirst={seterFirst}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    />
                </form>
            </article>
        </main>
    )
}