import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const petsSlice = createSlice({
  name: 'datallePet',
  initialState:{
    open:false,
    allPets:[],
    pet:{},
  },
  reducers:{
    setAllPets:(state, action) => {
      state.allPets = action.payload;
    },
    setOpen:(state, action) =>{
      state.open = action.payload;
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

export const PostPet = (petData:any) => () => {
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


