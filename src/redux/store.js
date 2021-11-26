import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import movieSlice from '../features/Movies/moviesSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
  reducer:{
    user : userSlice,
    movie : movieSlice
  },
  middleware : getDefaultMiddleware({
    serializableCheck : false
  })
})