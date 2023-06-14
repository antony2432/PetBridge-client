import axios from 'axios';

export default function useRegistroPet() {
  const PostPet = async (petData: any) => {
    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK}/animals`, petData);
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
