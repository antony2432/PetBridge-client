import { createSlice } from '@reduxjs/toolkit';
import { GReviews, PReviews } from '@/redux/thunk';
const reviews: any = [];
const userReviews: any = [];
let initialState = {
  reviews,
  userReviews,
};
export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
    builder.addCase(PReviews.fulfilled, (state, { payload }) => {
      state.userReviews = payload;
    });
  },
});
export default reviewsSlice.reducer;
