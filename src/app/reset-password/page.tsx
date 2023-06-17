import Image from 'next/image';
import useResetFlow from './hook/useResetFlow';

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
        <main>
            <article>
                <div>
                    <Image src='#' alt='animalitos coloridos'/>
                </div>
                <form>
                    <h1>Cambio de Contraseña</h1>
                </form>
            </article>
        </main>
    )
}