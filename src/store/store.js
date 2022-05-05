import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userAuthSlice from "../features/userAuth/userAuthSlice";
import searchSlice from "../features/search/searchSlice";
import moviesDataSlice from "../features/moviesData/moviesDataSlice";
import { omdbApi } from "../features/omdbApi/omdbApi";

export const store = configureStore({
  reducer: {
    auth: userAuthSlice,
    search: searchSlice,
    movies: moviesDataSlice,
    omdbApi: omdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdbApi.middleware),
});
