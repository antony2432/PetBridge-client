import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const Filter = createAsyncThunk('categorias/Filter', async (arr) => {
  const response = await axios.post('https://dealer-code.fly.dev/filter', { categories: arr });
  return response.data;
});
export const Paginate = createAsyncThunk('categorias/Paginate', async () => {
  const response = await axios.post('https://dealer-code.fly.dev/filter');
  return response.data;
});
export const getCategories = createAsyncThunk('categorias/getCategories', async () => {
  const response = await axios.get('https://dealer-code.fly.dev/category');
  return response.data;
});
