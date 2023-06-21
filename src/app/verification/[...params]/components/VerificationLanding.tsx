import { Button, Spinner } from "@material-tailwind/react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useVerification } from "../hook/useVerification";


export default function VerificationLanding(props:any) {
    const [loading, setLoading] = useState<boolean | string>('pending')
    const router = useRouter();
    const { handleSubmit } = useVerification();

    useEffect(()=>{
        const callBack = async () => {
            const id = props.params.params[1];
            console.log(id);
            const boolean = await handleSubmit(id)
            setLoading(boolean)
        }
        callBack();
    },[])

    const renderLanding = () => {
        if (loading==='pending') {
            return <Spinner color="amber" className="w-12 h-12" />;
        } else if (loading) {
            return (
                <>
                    <h1 className="font-extrabold text-GoldenYellow-700 text-2xl">Su cuenta ha sido verificada con éxito</h1>
                    <Image src='/img/check.png' alt='Check symbol' width={90} height={120}/>
                    <Button onClick={()=> router.push('/login')} className="bg-amber-500 hover:shadow-lg hover:shadow-amber-500/50">Iniciar Sesión</Button>
                </>
            )
        } else {
            return (
                <>
                    <h1 className="font-extrabold text-GoldenYellow-700 text-2xl">Oops... Ha ocurrido un error.</h1>
                    <Image src='/img/cross_mark.png' alt='Check symbol' width={90} height={120}/>
                </>
            )
        }
    }

    return (
        <article className="w-full h-full flex flex-grow justify-center items-center flex-col">
            {renderLanding()}
        </article>
    )
}