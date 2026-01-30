import  counterSlice  from '../features/counterSlice'
import {configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterSlice,
    user : userSlice
  },
});

export default store;