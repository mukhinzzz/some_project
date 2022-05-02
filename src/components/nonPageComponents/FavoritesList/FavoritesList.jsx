import { Link } from "react-router-dom";
import "./FavoritesList.css";

import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";

import { Card } from "antd";

const { Meta } = Card;

function FavoritesList() {
  let keys = Object.keys(localStorage);
  const userName = localStorage.getItem("userName");

  let favoriteKeys = keys.filter((key) => key.startsWith(`${userName}FavName`));
  let favoriteValues = favoriteKeys.map((key) => localStorage.getItem(key));

  let favoriteCards = favoriteValues.map((value) => {
    const identificator = localStorage.getItem(`${userName}FavId${value}`);
    const poster = localStorage.getItem(`${userName}FavPoster${value}`);

    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="poster"
            src={
              poster == "N/A"
                ? "https://imgholder.ru/240x350/8493a8/adb9ca&text=NO+POSTER&font=kelson"
                : poster
            }
          />
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

// (
//   <>
//     <img src={poster} alt="poster" />
//     <Link to={`/movie/${identificator}`}>
//       <p className="favorite-link">{value}</p>
//     </Link>
//   </>
// );
