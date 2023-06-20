import axios from 'axios';

import useUserSesion from '@/hook/userSesion';


export default function useRegistroPet() {
  const { sesion } = useUserSesion();
 
  const PostPet = async (petData: any) => {
    try {
      console.log(petData);
      console.log(sesion?.token);
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK}/animals`, petData, {
        headers: {
          authorization: `Bearer ${sesion?.token}`,
        },
      });
    
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    PostPet,
  };
}
