import { MovieSearch } from "../../nonPageComponents/MovieSearch/MovieSearch";

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <MovieSearch />
      <h1 className="main-header">HI! LET'S START SEARCHING!</h1>
    </>
  );
}

export { MainPage };
