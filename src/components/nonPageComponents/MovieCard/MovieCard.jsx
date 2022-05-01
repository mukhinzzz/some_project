import { Card } from "antd";
import { Link } from "react-router-dom";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";
import "./MovieCard.css";

const { Meta } = Card;

function MovieCard(props) {
  let { title, poster, id } = props;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={
            poster == "N/A"
              ? "https://imgholder.ru/240x350/8493a8/adb9ca&text=NO+POSTER&font=kelson"
              : poster
          }
        />
      }
    >
      <Meta
        title={title}
        description={<Link to={`/film/${id}`}>See more...</Link>}
        avatar={<FavoriteIcon id={id} title={title} />}
      />
    </Card>
  );
}

export { MovieCard };
