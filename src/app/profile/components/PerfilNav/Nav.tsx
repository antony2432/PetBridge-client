import { BsPersonFill } from 'react-icons/bs';
import { GiPadlock } from 'react-icons/gi';
import { FiMessageSquare } from 'react-icons/fi';
const Nav = (Props: {
  setPages: (arg0: { General: boolean; Security: boolean; Notifications: boolean }) => void;
  pages: { General: any; Security: any; Notifications: any };
}) => {
  return (
    <div className="flex flex-col ml-7">
      <button
        onClick={() =>
          Props.setPages({
            General: true,
            Security: false,
            Notifications: false,
          })
        }
        className={
          Props.pages.General
            ? 'flex pb-5 pt-5 items-center text-[#8E5500] font-semibold pr-7 border-b border-[#8E5500]'
            : 'flex pb-5 pt-5 items-center text-[#F0A73E] font-semibold pr-7 border-b border-[#8E5500]'
        }
      >
        <BsPersonFill className="mr-2 ml-2" />
        General
      </button>
      <button
        onClick={() =>
          Props.setPages({
            Security: true,
            General: false,
            Notifications: false,
          })
        }
        className={
          Props.pages.Security
            ? 'flex pb-5 pt-5 items-center text-[#8E5500] font-semibold pr-7 border-b border-[#8E5500]'
            : 'flex pb-5 pt-5 items-center text-[#F0A73E] font-semibold pr-7 border-b border-[#8E5500]'
        }
      >
        <GiPadlock className="mr-2 ml-2" />
        Seguridad
      </button>
      <button
        onClick={() =>
          Props.setPages({
            Notifications: true,
            General: false,
            Security: false,
          })
        }
        className={
          Props.pages.Notifications
            ? 'flex pb-5 pt-5 items-center text-[#8E5500] font-semibold pr-7 border-b border-[#8E5500]'
            : 'flex pb-5 pt-5 items-center text-[#F0A73E] font-semibold pr-7 border-b border-[#8E5500]'
        }
      >
        <FiMessageSquare className="mr-2 ml-2" />
        Notificaciones
      </button>
    </div>
  );
};
/*({
    General:true,
    Security:false,
    Notifications:false,
  }) */

export default Nav;
