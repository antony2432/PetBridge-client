import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export default function ButtonsSlider({ Next, Previous }: any) {
  return (
    <span className="flex mt-10 gap-5">
      <button onClick={Previous}>
        <BsArrowLeftCircleFill size={30} className="text-DarkBrown-900" />
      </button>
      <button onClick={Next}>
        <BsArrowRightCircleFill  size={30} className="text-DarkBrown-900" />
      </button>
    </span>
  );
}
