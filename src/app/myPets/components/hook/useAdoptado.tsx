import useUserSesion from '@/hook/userSesion';
import axios from 'axios';

export default function useEditPetAdopted() {   
  const { sesion } = useUserSesion();
  const PutAdopted = async (idPet:string, isState: any) => {

    console.log(idPet);
    try {
      const data = await axios.patch(`${process.env.NEXT_PUBLIC_API_BACK}/animals/animals-update/${idPet}`, { status: isState }, {
        headers: {
          authorization: `Bearer ${sesion?.token}`,
        },
      });
      console.log('datos cambiados');
      return data;
    } catch (error) {
      console.log(error);
    }
    
  };
  return {
    PutAdopted,
  };
}
