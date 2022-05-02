import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setChosenMovieInfo } from "../../../features/moviesData/moviesDataSlice";
import {
  setSearchingFalse,
  setSearchingTrue,
} from "../../../features/search/searchSlice";

import { BigMovieCard } from "./BigMovieCard/BigMovieCard";

function MovieInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const filmData = useSelector((state) => state.movies.chosenMovieInfo);
  const isSearching = useSelector((state) => state.search.isSearchingNow);

  //   const turnOnSearching = dispatch(setSearchingTrue());

  let renderedInfo = isSearching ? (
    <h1 style={{ color: "white" }}>Загрузка...</h1>
  ) : (
    <BigMovieCard />
  );

  useEffect(() => {
    dispatch(setSearchingTrue());

    fetch(`http://www.omdbapi.com/?apikey=b668f6de&i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setChosenMovieInfo(data));
        dispatch(setSearchingFalse());
      });
  }, []);

  return renderedInfo;
}

export { MovieInfo };
