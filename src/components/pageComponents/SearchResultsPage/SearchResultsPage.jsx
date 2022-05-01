import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { MovieSearch } from "../../nonPageComponents/MovieSearch/MovieSearch";

import { MovieContainer } from "../../nonPageComponents/MovieContainer/MovieContainer";

import { setSearchingFalse } from "../../../features/search/searchSlice";

import { setMoviesSearchData } from "../../../features/moviesData/moviesDataSlice";

import "./SearchResultsPage.css";

function SearchResultsPage() {
  const isSearching = useSelector((state) => state.search.isSearchingNow);

  const dispatch = useDispatch();

  const { query, pageNumber } = useParams();

  useEffect(() => {
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
