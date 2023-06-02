import { StaticImageData } from 'next/image';
import foto from './img/png-transparent-face-smiley-happiness-faces-image-file-formats-photography-people-removebg-preview.png';
import foto3 from './img/images4.png';
import foto4 from './img/images3.png';
import foto5 from './img/images2.png';
import foto7 from './img/images1.png';
export interface Reviews {
  foto: StaticImageData;
  name: string;
  description: string;
  date: string;
}
export let Slides: Reviews[] = [       
  { foto:foto, name:'Dimas dean213213', description:'PuppyPets es un sitio web altamente recomendado para aquellos que deseen adoptar un animal de compañía', date:'23 mayo 2023' },
  { foto:foto3, name:'Dimas deanassadas', description:'PuppyPets es un sitio web altamente recomendado para aquellos que deseen adoptar un animal de compañía', date:'23 mayo 2023' },
  { foto:foto4, name:'Dimas deanxzxczxcz', description:'PuppyPets es un sitio web altamente recomendado para aquellos que deseen adoptar un animal de compañía', date:'23 mayo 2023' },
  { foto:foto5, name:'Dimas deanbfrdgcxg', description:'PuppyPets es un sitio web altamente recomendado para aquellos que deseen adoptar un animal de compañía', date:'23 mayo 2023' },
  { foto:foto7, name:'Dimas deangfshgrff', description:'PuppyPets es un sitio web altamente recomendado para aquellos que deseen adoptar un animal de compañía', date:'23 mayo 2023' },
]  ;
