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

export const fetchAllPets = () => (dispatch) =>{

  axios
    .get('http://localhost:3000/animals')
    .then((response) => {
      dispatch(setAllPets(response.data));
    }).catch((error)=> console.log('error al cargar las mascotas ', error));

};

export const setopen = () => (dispatch) => {

  dispatch(setOpen(!open));
};

