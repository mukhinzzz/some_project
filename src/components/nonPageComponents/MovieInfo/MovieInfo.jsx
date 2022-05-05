import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

import { setChosenMovieInfo } from "../../../features/moviesData/moviesDataSlice";
import {
  setSearchingFalse,
  setSearchingTrue,
} from "../../../features/search/searchSlice";

import { BigMovieCard } from "./BigMovieCard/BigMovieCard";

import { useGetMovieQuery } from "../../../features/omdbApi/omdbApi";

function MovieInfo() {
  const { id } = useParams();
  // const dispatch = useDispatch();

  const { data = {}, isSuccess } = useGetMovieQuery(id);

  let response;

  if (isSuccess) {
    response = <BigMovieCard filmData={data} />;
  } else {
    response = <h1 style={{ color: "white" }}>Загрузка...</h1>;
  }

  // const filmData = useSelector((state) => state.movies.chosenMovieInfo);
  // const isSearching = useSelector((state) => state.search.isSearchingNow);

  //   const turnOnSearching = dispatch(setSearchingTrue());

  // console.log(data);

  // let renderedInfo = isLoading ? (
  //   <h1 style={{ color: "white" }}>Загрузка...</h1>
  // ) : (
  //   <BigMovieCard filmData={filmInfoResponse} />
  // );

  // useEffect(() => {
  //   dispatch(setSearchingTrue());

  //   fetch(`http://www.omdbapi.com/?apikey=b668f6de&i=${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setChosenMovieInfo(data));
  //       dispatch(setSearchingFalse());
  //     });
  // }, []);

  // return !isSuccess ? (
  //   <h1 style={{ color: "white" }}>Загрузка...</h1>
  // ) : (
  //   <BigMovieCard filmData={filmInfoResponse} />
  // );

  return response;
}

export { MovieInfo };
