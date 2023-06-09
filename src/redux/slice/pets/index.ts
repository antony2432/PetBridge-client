import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const petsSlice = createSlice({
  name: 'datallePet',
  initialState:{
    open:false,
    allPets:[],
    pet:{},
    numPage: 1,
    nextPage:1,
    prevPage:1,
  },
  reducers:{
    setAllPets:(state, action) => {
      state.allPets = action.payload;
    },
    setOpen:(state, action) =>{
      state.open = action.payload;
    },
    nextPage:(state)=>{
      state.numPage = state.numPage + 1;
    },
    prevPage:(state)=>{
      state.numPage -= state.prevPage;
    },
    page:(state)=>{
      state.numPage = 1;
    },
  },
});

export const { setAllPets, setOpen } = petsSlice.actions;

export default petsSlice.reducer;
type Action = {
  type: string;
  payload?: any;
};

type Dispatch = (action: Action) => void;
export const fetchAllPets = () => (dispatch:Dispatch) =>{

  axios
    .get('http://localhost:3000/animals')
    .then((response) => {
      dispatch(setAllPets(response.data));
    }).catch((error)=> console.log('error al cargar las mascotas ', error));

};

export const setopen = () => (dispatch:Dispatch) => {

  dispatch(setOpen(!open));
};

export const PostPet = (petData) => (dispatch) => {
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


export const nextPage = () => (dispatch: any) => {
  dispatch(nextPage());
};
export const prevPage = () => (dispatch: any) => {
  dispatch(prevPage());
};

export const page = () => (dispatch: any) => {
  dispatch(page());
};