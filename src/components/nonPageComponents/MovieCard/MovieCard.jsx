import { useSelector } from "react-redux";
import { useContext } from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";

import { AppContext } from "../AppContext/AppContext";

import PropTypes from "prop-types";

const { Meta } = Card;

function MovieCard(props) {
  let { title, poster, id } = props;

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { placeholder } = useContext(AppContext);

  console.log(placeholder);

  MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={
            poster == "N/A" ? placeholder : poster
            // ? "https://imgholder.ru/240x350/8493a8/adb9ca&text=NO+POSTER&font=kelson"
          }
        />
      }
    >
      <Meta
        title={title}
        description={<Link to={`/movie/${id}`}>See more...</Link>}
        avatar={
          isLoggedIn ? (
            <FavoriteIcon id={id} title={title} poster={poster} />
          ) : (
            ""
          )
        }
      />
    </Card>
  );
}

export { MovieCard };
