import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import moviesSlice from '../features/Movies/moviesSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
  reducer:{
    user : userSlice,
    movie : moviesSlice
  },
  middleware : getDefaultMiddleware({
    serializableCheck : false
  })
})