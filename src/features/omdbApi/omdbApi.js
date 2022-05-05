import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/`,
  }),
  endpoints: (build) => ({
    getMovie: build.query({
      query: (omdbId) => ({ url: "?apikey=b668f6de", params: `&i=${omdbId}` }),
    }),
  }),
});

export const { useGetMovieQuery } = omdbApi;
