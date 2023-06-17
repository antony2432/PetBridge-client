import { Avatar } from '@material-tailwind/react';
import Image from 'next/image';
import ImageUploader from '../imageUploader/ImageUploader';
import defaultt from './image/png-clipart-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-removebg-preview.png';
const Perfil = ({ User }: any) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="rounded-full text-center w-32 h-w-32">
          {User[0] ? (
            User[0].image
          ) : false ? (
            <Avatar src={User[0].image} size="lg" alt="avatar"></Avatar>
          ) : (
            <Image src={defaultt} width={70} height={70} alt="defaultImg"></Image>
          )}
        </div>
        <div className="flex justify-center mt-1 hover:bg-[#ffd499] rounded items-center">
          <ImageUploader User={User}></ImageUploader>
        </div>
      </div>
      <h1 className="text-center text-lg font-semibold">{User[0] ? User[0].firstName : null}</h1>
    </div>
  );
};

export default Perfil;
