import { IData } from './IData.interface';

export interface ICard {
  data: IData;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  loaded: boolean;
}
