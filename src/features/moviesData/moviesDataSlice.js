import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesSearchData: {},
  chosenMovieInfo: {},
};

export const movieDataSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesSearchData: (state, action) => {
      state.moviesSearchData = action.payload;
    },

    setChosenMovieInfo: (state, action) => {
      state.chosenMovieInfo = action.payload;
    },
  },
});

export const { setMoviesSearchData, setChosenMovieInfo } =
  movieDataSlice.actions;

export default movieDataSlice.reducer;
