import { useState } from "react";

import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";

function FavoriteIcon(props) {
  const { id, title, poster } = props;
  const userName = localStorage.getItem("userName");

  const startFavoritesState = Boolean(
    localStorage.getItem(`${userName}FavName${id}`)
  );

  let [isInFavorites, toggleFavorites] = useState(startFavoritesState);

  function addToFavorites() {
    localStorage.setItem(`${userName}FavName${id}`, title);
    localStorage.setItem(`${userName}FavId${title}`, id);
    localStorage.setItem(`${userName}FavPoster${title}`, poster);
    toggleFavorites(true);
  }

  function removeFromFavorites() {
    localStorage.removeItem(`${userName}FavName${id}`);
    localStorage.removeItem(`${userName}FavId${title}`);
    localStorage.removeItem(`${userName}FavPoster${title}`);
    toggleFavorites(false);
  }

  return isInFavorites ? (
    <StarFilled onClick={() => removeFromFavorites()} />
  ) : (
    <StarOutlined onClick={() => addToFavorites()} />
  );
}

export { FavoriteIcon };
