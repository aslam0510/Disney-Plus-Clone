import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommend : null,
  newDisney : null,
  original : null,
  trending : null
};

 const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies : (state,action) => {
      state.recommend = action.payload.recommend
      state.original = action.payload.original
      state.newDisney = action.payload.newDisney
      state.trending = action.payload.trending
    }
  }
});


export const {setMovies} = movieSlice.actions ;

export const selectRecommend = state =>  state.movie.recommend
export const selectOriginal = state => state.movie.original;
export const selectNewDisney = state => state.user.newDisney;
export const selectTrending = state => state.user.trending;


export default movieSlice.reducer