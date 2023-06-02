export interface IPerros {
  name: string;
  gender: 'Macho' | 'Hembra';
  genderI: JSX.Element;
  size: string;
  temperament: JSX.Element;
  weight: number;
  age: number;
  country: string;
  location: string;
  image: string
}