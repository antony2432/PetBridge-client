import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';
import './style.css';
export default function CarouselPet({ images }: any) {
  
  return (
    <section className=' row-span-1 h-[550px] my-5'>
    <Carousel
    
      className="rounded-xl custom-carousel carousel-pet h-full "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 h-5 flex items-center -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? ' bg-white w-8' : 'bg-GoldenYellow-500 w-4'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      
    >
    {images.map((img:string, i:string)=>(
    <Image key={i}
        src={img}
        alt="image 1"
        className="h-full w-screen object-contain bg-white"
        width={200}
        height={200}
      />)) }
     
    </Carousel>
    </section>
  );
}