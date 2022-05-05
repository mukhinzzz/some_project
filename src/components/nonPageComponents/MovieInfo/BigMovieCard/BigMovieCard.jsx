import "./BigMovieCard.css";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

function BigMovieCard(props) {
  // const filmData = useSelector((state) => state.movies.chosenMovieInfo);
  // console.log(props);

  BigMovieCard.propTypes = {
    filmData: PropTypes.object.isRequired,
  };

  const {
    Title,
    Year,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Poster,
    Metascore,
    imdbRating,
    Awards,
    Country,
  } = props.filmData;
  return (
    <div className="container">
      <div>
        <img src={Poster} alt="Film" className="film-poster " />
      </div>
      <div className="text-background">
        <h1 className="film-header">{Title}</h1>
        <span>{Year} </span>
        <span>{Runtime} </span>
        <br />
        <span>Metascore: {Metascore} </span>
        <span>IMDB: {imdbRating} </span>
        <br />
        <br />
        <span>{Genre} </span>
        <br />
        <br />
        <span>{Plot}</span>
        <br />
        <br />
        <span>Actors: {Actors}</span>
        <br />
        <br />
        <span>Director: {Director}</span>
        <br />
        <br />
        <span>Country: {Country}</span>
      </div>
    </div>
  );
}

//TITLE, YEAR, RUNTIME, GENRE, DIRECTOR, ACTORS, PLOT, POSTER, METASCORE
//IMDBRATING, AWARDS, COUNTRY

export { BigMovieCard };
