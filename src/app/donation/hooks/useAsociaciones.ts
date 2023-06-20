import useUserSesion from '@/hook/userSesion';
import axios from 'axios';

export default function useAsociaciones() {   
  const { sesion } = useUserSesion();
  const asociaciones = async () => {

    
    try {
      const data = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/asociaciones`, {
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
    asociaciones,
  };
}
