import { Step, Button, Stepper } from "@material-tailwind/react";
import { IResetPasswordProps } from "../../interface/IResetPasswordProps";
import { useRouter } from "next/navigation";

export default function StepperReset({
    activeStep,
    setActiveStep,
    isLastStep,
    isFirstStep,
    seterLast,
    seterFirst,
    handleNext,
    handlePrev,
    enabled,
    submitEmail,
    submitPassword,
    submitToken,
}: IResetPasswordProps) {

  const router = useRouter();

  let button;
  switch(activeStep){
    case 0:
      button=<Button onClick={async (e)=> {
        const goNext = await submitEmail(e);
        goNext ? handleNext() : null
       }
      }
      disabled={enabled}
      size="sm"
      className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50">
        Siguiente</Button>
      break;
    case 1:
      button=<Button onClick={async (e)=>{
        const goNext = await submitToken(e);
        goNext? handleNext() : null
        }
      }
      disabled={enabled}
      size="sm"
      className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50">
        Siguiente
      </Button>
      break;
    case 2:
      button=<Button onClick={async (e)=>{
        const goNext = await submitPassword(e);
        goNext ? handleNext() : null
        }
      }
      disabled={enabled}
      size="sm"
      className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50">
        Crear Contraseña</Button>
    break;
    case 3:
      button=<Button onClick={()=> router.push('/login')} size='sm' className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50">
        Iniciar sesión
      </Button>
  }

    return (
        <div className="w-full py-4 px-8 mt-10 flex flex-col items-center">
          <Stepper activeStep={activeStep} isLastStep={seterLast} isFirstStep={seterFirst}>
            <Step className="h-4 w-4" />
            <Step className="h-4 w-4" />
            <Step className="h-4 w-4" />
            <Step className="h-4 w-4" />
          </Stepper>
          <div className="mt-5 flex gap-4 justify-between">
          {button}
          </div>
        </div>
      );
}