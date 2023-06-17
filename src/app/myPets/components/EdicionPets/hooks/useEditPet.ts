import axios from 'axios';

export default function useEditPet() {
  const PutPet = async (params:string, petData: any) => {
    console.log(petData);
    console.log(params);
    try {
      const data = await axios.put(`${process.env.NEXT_PUBLIC_API_BACK}/animals/editAnimal/${params}`, petData);
      // if(data.status === ) {

      // }
      return data;
    } catch (error) {
      console.log(error);
    }
    
  };
  return {
    PutPet,
  };
}
