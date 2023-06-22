import useUserSesion from '@/hook/userSesion';
import { useAppDispatch } from '@/redux/hook';
import { setAllPets } from '@/redux/slice/pets';

export default function usePets() {
  const dispatch = useAppDispatch();
  const { sesion } = useUserSesion();
  const fetchAllPets = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_BACK}/animals`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${sesion?.token}`,
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAllPets(data));
      })
      .catch((error) => console.log('error al cargar las mascotas ', error));
  };
  return {
    fetchAllPets,
  };
}
