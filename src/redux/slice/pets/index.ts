import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const categories: any = [];
const categoriasOrigin: any = [];
export let petsSlice = createSlice({
  name: 'datallePet',
  initialState: {
    open: false,
    allPets: [],
    categories,
    categoriasOrigin,
    pet: {},
  },
  reducers: {
    setAllPets: (state, action) => {
      state.allPets = action.payload;
      state.categoriasOrigin = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setCategorias: (state, action) => {
      console.log(action.payload);
      console.log(state.categoriasOrigin, '2');
      console.log(state.allPets, '1');
      const categorias = state.categoriasOrigin;
      const filter = categorias.filter((c: any) => c.gender === action.payload);
      state.categories = filter;
    },
  },
});

export const { setAllPets, setOpen, setCategorias } = petsSlice.actions;

export default petsSlice.reducer;
type Action = {
  type: string;
  payload?: any;
};

type Dispatch = (action: Action) => void;
export const fetchAllPets = () => (dispatch: Dispatch) => {
  axios
    .get('https://deploy-petsbridge.vercel.app/animals')
    .then((response) => {
      dispatch(setAllPets(response.data));
    })
    .catch((error) => console.log('error al cargar las mascotas ', error));
};

export const setopen = () => (dispatch: Dispatch) => {
  dispatch(setOpen(!open));
};

export const PostPet = (petData: any) => () => {
  console.log(petData);
  axios
    .post('http://localhost:3000/animals', petData)
    .then((response) => {
      console.log('Mascota enviada correctamente:', response.data);
    })
    .catch((error) => {
      console.log('Error al enviar la mascota:', error);
    });
};
