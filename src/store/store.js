import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "../features/userAuth/userAuthSlice";
import searchSlice from "../features/search/searchSlice";
import moviesDataSlice from "../features/moviesData/moviesDataSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthSlice,
    search: searchSlice,
    movies: moviesDataSlice,
  },
});
