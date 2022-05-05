import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { MovieSearch } from "../../nonPageComponents/MovieSearch/MovieSearch";
import { MovieContainer } from "../../nonPageComponents/MovieContainer/MovieContainer";

import {
  setSearchingFalse,
  setSearchingTrue,
} from "../../../features/search/searchSlice";
import { setMoviesSearchData } from "../../../features/moviesData/moviesDataSlice";

import "./SearchResultsPage.css";

const API_KEY = process.env.API_KEY;

function SearchResultsPage() {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.search.isSearchingNow);

  const { query, pageNumber } = useParams();

  useEffect(() => {
    dispatch(setSearchingTrue());
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMoviesSearchData(data));
        dispatch(setSearchingFalse());
      });
  }, [query, pageNumber]);

  return isSearching ? (
    <h1 style={{ color: "white" }}>Loading...</h1>
  ) : (
    <>
      <MovieSearch /> <MovieContainer />
    </>
  );
}

export { SearchResultsPage };
