import { useSelector } from "react-redux";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Card } from "antd";

import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";

import { AppContext } from "../AppContext/AppContext";

const { Meta } = Card;

function MovieCard(props) {
  let { title, poster, id } = props;

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { placeholder } = useContext(AppContext);

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
        <img alt="example" src={poster === "N/A" ? placeholder : poster} />
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
