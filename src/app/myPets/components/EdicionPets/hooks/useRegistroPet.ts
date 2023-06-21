import axios from 'axios';
// import { useAppSelector } from '@/redux/hook';
// import { selectUser } from '@/redux/slice/user.slice';

export default function useRegistroPet() {
  // const user = useAppSelector(selectUser);
  const PostPet = async (petData: any) => {
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK}/animals`, petData, {
        // headers: {
        //   authorization: user.id,
        // },
      });
      // if(data.status === ) {

      // }
      return data;
    } catch (error) {
      console.log(error);
    }
    
  };
  return {
    PostPet,
  };
}
