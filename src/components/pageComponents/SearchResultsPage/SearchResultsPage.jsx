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

import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

import "./SearchResultsPage.css";

function SearchResultsPage() {
  const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());
  const isSearching = useSelector((state) => state.search.isSearchingNow);

  const { query, pageNumber } = useParams();

  useEffect(() => {
    dispatch(setSearchingTrue());
    fetch(
      `http://www.omdbapi.com/?apikey=b668f6de&s=${query}&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMoviesSearchData(data));
        dispatch(setSearchingFalse());
      });
  }, [query, pageNumber]);

  return isSearching ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <MovieSearch /> <MovieContainer />
    </>
  );
}

export { SearchResultsPage };
