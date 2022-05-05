import { useParams } from "react-router-dom";

import { BigMovieCard } from "./BigMovieCard/BigMovieCard";

import { useGetMovieQuery } from "../../../features/omdbApi/omdbApi";

function MovieInfo() {
  const { id } = useParams();
  const { data = {}, isSuccess } = useGetMovieQuery(id);
  let response;

  if (isSuccess) {
    response = <BigMovieCard filmData={data} />;
  } else {
    response = <h1 style={{ color: "white" }}>Загрузка...</h1>;
  }

  return response;
}

export { MovieInfo };
