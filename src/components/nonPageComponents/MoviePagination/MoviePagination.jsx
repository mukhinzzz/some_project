import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MoviePagination.css";

function MoviePagination() {
  const navigate = useNavigate();
  const { query, pageNumber } = useParams();
  const totalResults = useSelector(
    (state) => state.movies.moviesSearchData.totalResults
  );

  function onPageTransition(desiredPage) {
    window.scrollTo(0, 0);
    navigate(`/search/${query}/${desiredPage}`);
  }

  return (
    <div className="pagination-container">
      <Pagination
        responsive
        hideOnSinglePage={true}
        onChange={(desiredPage) => onPageTransition(desiredPage)}
        total={totalResults}
        pageSize={10}
        showSizeChanger={false}
        current={pageNumber}
      />
    </div>
  );
}

export { MoviePagination };
