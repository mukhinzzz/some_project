import { Link } from "react-router-dom";
import { useContext } from "react";
import "./FavoritesList.css";

import { AppContext } from "../AppContext/AppContext";

import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";

import { Card } from "antd";
const { Meta } = Card;

function FavoritesList() {
  let keys = Object.keys(localStorage);
  const userName = localStorage.getItem("userName");

  let favoriteKeys = keys.filter((key) => key.startsWith(`${userName}FavName`));
  let favoriteValues = favoriteKeys.map((key) => localStorage.getItem(key));

  const { placeholder } = useContext(AppContext);

  let favoriteCards = favoriteValues.map((value) => {
    const identificator = localStorage.getItem(`${userName}FavId${value}`);
    const poster = localStorage.getItem(`${userName}FavPoster${value}`);

    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="poster" src={poster === "N/A" ? placeholder : poster} />
        }
      >
        <Meta
          title={value}
          description={<Link to={`/movie/${identificator}`}>See more...</Link>}
          avatar={
            <FavoriteIcon id={identificator} title={value} poster={poster} />
          }
        />
      </Card>
    );
  });

  return <div className="favorites-container">{favoriteCards}</div>;
}

export { FavoritesList };
