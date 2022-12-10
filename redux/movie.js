import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "trending",
  featuredMovies: [],
  movieModalId: null,
  movieModalActive: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    setFeaturedMovies: (state, action) => {
      state.featuredMovies = action.payload;
    },
    setMovieModalId: (state, action) => {
      state.movieModalId = action.payload;
    },
    setMovieModalActive: (state, action) => {
      state.movieModalActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateCategory,
  setFeaturedMovies,
  setMovieModalId,
  setMovieModalActive,
} = movieSlice.actions;

export default movieSlice.reducer;
