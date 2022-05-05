import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = process.env.API_KEY;

export const omdbApi = createApi({
  reducerPath: "omdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.omdbapi.com/`,
  }),
  endpoints: (build) => ({
    getMovie: build.query({
      query: (omdbId) => ({
        url: `?apikey=${API_KEY}`,
        params: `&i=${omdbId}`,
      }),
    }),
  }),
});

export const { useGetMovieQuery } = omdbApi;
