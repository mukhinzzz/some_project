import { Link } from "react-router-dom";

import { MovieCard } from "../MovieCard/MovieCard";

import { useSelector } from "react-redux";

import "./FastSearchResults.css";

function FastSearchResults() {
  const fastSearchResults = useSelector(
    (state) => state.search.fastSearchData.Search
  );

  return (
    <div className="fastsearch-container">
      {fastSearchResults.map((movie, index) => {
        if (index < 5) {
          return (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              id={movie.imdbID}
            />
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export { FastSearchResults };
