import React, { useState, ChangeEvent } from 'react';
import { Checkbox } from '@material-tailwind/react';
import useEditPetAdopted from './hook/useAdoptado';




export default function Check({ estado, idPet }:any) {
 
  const { PutAdopted } = useEditPetAdopted();
  
 
  const [isChecked, setIsChecked] = useState(estado === 'adoptado' ? true : false);
 
    


  const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    let isState = isChecked ? 'adoptado' : ' adopcion';
    const response = await PutAdopted(idPet, isState);
    console.log(response);
   
 
  };

  return (
    <div className='flex justify-center items-center'>
      <Checkbox
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        }
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p>{isChecked ? 'Adoptado' : 'En adopcion'}</p>
    </div>
  );
}
