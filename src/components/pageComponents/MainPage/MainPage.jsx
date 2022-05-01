import { MovieSearch } from "../../nonPageComponents/MovieSearch/MovieSearch";

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <MovieSearch />
      <h1 className="main-header">
        &#129045; HI! LET'S START SEARCHING! &#129045;
      </h1>
      <img
        // src="https://i.ytimg.com/vi/mP_3MUs5kyg/maxresdefault.jpg"
        src="https://pbs.twimg.com/media/E9a1quWWYAEThOn.jpg"
        alt="hehe boy"
        className="main-image"
      />
    </>
  );
}

export { MainPage };
