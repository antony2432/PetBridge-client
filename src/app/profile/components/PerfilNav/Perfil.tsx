import useUserSesion from '@/hook/userSesion';
import { Avatar } from '@material-tailwind/react';
import Image from 'next/image';
import ImageUploader from '../imageUploader/ImageUploader';
import defaultt from './image/png-clipart-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-removebg-preview.png';
const Perfil = ({ User, rol }: any) => {

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="rounded-full text-center w-32 h-w-32">
          {User && User.image ? (
            <Avatar src={User.image} size="lg" alt="avatar"></Avatar>
          ) : (
            <div className="flex justify-center">
              <Image src={defaultt} width={70} height={70} alt="defaultImg"></Image>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-1 hover:bg-[#ffd499] rounded items-center">
          <ImageUploader User={User} rol={rol}></ImageUploader>
        </div>
      </div>
      <h1 className="text-center text-lg font-semibold mt-2">
        { User ? rol !== 'fundation' ? `${User.firstName} ${User.lastName}` : User.nameOfFoundation : null}
      </h1>
    </div>
  );
};

export default Perfil;
