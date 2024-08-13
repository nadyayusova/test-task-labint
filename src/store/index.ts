import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewsSlice';

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
