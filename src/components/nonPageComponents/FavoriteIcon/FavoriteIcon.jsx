import { StarOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";

function FavoriteIcon(props) {
  const { id, title } = props;
  const userName = localStorage.getItem("userName");
  let [isInFavorites, toggleFavorites] = useState(false);

  useEffect(() =>
    toggleFavorites(
      (isInFavorites = Boolean(localStorage.getItem(`${userName}FavName${id}`)))
    )
  );

  function addToFavorites() {
    localStorage.setItem(`${userName}FavName${id}`, title);
    localStorage.setItem(`${userName}FavId${title}`, id);
    toggleFavorites((isInFavorites = true));
  }

  function removeFromFavorites() {
    localStorage.removeItem(`${userName}FavName${id}`);
    localStorage.removeItem(`${userName}FavId${title}`);
    toggleFavorites((isInFavorites = false));
  }

  return isInFavorites ? (
    <StarFilled onClick={() => removeFromFavorites()} />
  ) : (
    <StarOutlined onClick={() => addToFavorites()} />
  );
  //В зависимости от состояния isInFavorites выводить либо StarOutlined, либо StarFilled
  //localStorage.getItem(`${userName}Fav${id}`)
}

export { FavoriteIcon };
