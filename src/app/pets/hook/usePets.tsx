import useUserSesion from '@/hook/userSesion';
import { useAppDispatch } from '@/redux/hook';
import { setAllPets } from '@/redux/slice/pets';
import axios from 'axios';

export default function usePets() {
  const dispatch = useAppDispatch();

  const fetchAllPets = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/animals`);

      dispatch(setAllPets(data));
    } catch (error) {
      console.log('error al cargar las mascotas ', error);
    }

  };
  return {
    fetchAllPets,
  };
}
