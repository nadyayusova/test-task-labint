import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {reviewsDataItem, reviewsData} from './reviews-data';

interface ReviewsState {
  reviews: reviewsDataItem[];
}

const initialState: ReviewsState = {
  reviews: reviewsData,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {
    addReview(state, action: PayloadAction<reviewsDataItem>) {
      state.reviews.push({
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        city: action.payload.city,
        text: action.payload.text,
      });
    },
    removeReview(state, action: PayloadAction<{id: number}>) {
      state.reviews = state.reviews.filter((review) => review.id !== action.payload.id);
    },
  },
});

export const {addReview, removeReview} = reviewSlice.actions;

export default reviewSlice.reducer;
