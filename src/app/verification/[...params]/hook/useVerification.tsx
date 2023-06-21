import axios, { AxiosError } from "axios"

export function useVerification() {
    const handleSubmit = async (id:string | undefined) => {
        try {
            const response = await axios.patch(`http://localhost:3000/auth/verify?id=${id}`)
            if (response.data.status >= 400) throw new Error(response.data.message)
            return true
        } catch (err:any) {
            const isAxiosError = (some: any): some is AxiosError => {
                return some.isAxiosError === true;
               };
               if (isAxiosError(err)) {
                 if (err.response?.status === 400) {
                   alert(err.response?.data);
                   console.log(err.response);
                 }
                }
            alert(err.message);
            return false;
        }
    }

    return {
        handleSubmit,
    }
}