import { Link } from "react-router-dom";
import "./FavoritesList.css";

function FavoritesList() {
  let keys = Object.keys(localStorage);
  const userName = localStorage.getItem("userName");

  let favoriteKeys = keys.filter((key) => key.startsWith(`${userName}FavName`));
  let favoriteValues = favoriteKeys.map((key) => localStorage.getItem(key));

  let favoriteCards = favoriteValues.map((value) => {
    const identificator = localStorage.getItem(`${userName}FavId${value}`);

    return (
      <Link to={`/film/${identificator}`}>
        <p className="favorite-link">{value}</p>
      </Link>
    );
  });

  return <div className="favorites-container">{favoriteCards}</div>;
}

export { FavoritesList };
