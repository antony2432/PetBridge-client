import useUserSesion from '@/hook/userSesion';
import axios from 'axios';

export default function useEditPet() {   
  const { sesion } = useUserSesion();
  const PutPet = async (params:string, petData: any) => {

    console.log(petData);
    try {
      const data = await axios.put(`${process.env.NEXT_PUBLIC_API_BACK}/animals/editAnimal/${params}`, petData, {
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
    PutPet,
  };
}
