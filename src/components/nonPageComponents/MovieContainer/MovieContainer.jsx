import { useSelector } from "react-redux";

import { MovieCard } from "../MovieCard/MovieCard";

function MovieContainer() {
  const movieList = useSelector(
    (state) => state.movies.moviesSearchData.Search
  );

  return (
    <div className="movie-container">
      {movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            id={movie.imdbID}
          />
        );
      })}
    </div>
  );
}

export { MovieContainer };
