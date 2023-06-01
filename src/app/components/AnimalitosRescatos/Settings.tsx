import { NextArrow, PrevArrow } from './Arrows';
export let settings = {
    
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
    
  nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
  prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,
   
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
  ],
};
