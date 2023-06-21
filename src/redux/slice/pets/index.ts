import { createSlice } from '@reduxjs/toolkit';

export const petsSlice = createSlice({
  name: 'datallePet',
  initialState: {
    open: false,
    actualize: 0,
    allPets: [],
    pet: {},
    petId:{
      image:[],
      name:'',
      city: '',
      country: '',
      state: '',
      edad: 0,
      description: '',
      files: null,
      weight: '',
      specie: '',
      gender: '',
      phone: '',
      email: '',
      otros: '',
      age_M:null,
      age_Y:null,
      as_id:'',
      id:'',
    },
  },
  reducers: {
    setAllPets: (state, action) => {
      state.allPets = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setId:(state, action)=>{
      state.petId = action.payload;
    },
    setActualize: (state) => {
      state.actualize++;
    },
  },
});

export const { setAllPets, setOpen, setId, setActualize } = petsSlice.actions;
export default petsSlice.reducer;
