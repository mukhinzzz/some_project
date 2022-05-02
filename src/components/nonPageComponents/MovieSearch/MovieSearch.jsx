import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeSearchValue } from "../../../features/search/searchSlice";

import { Input } from "antd";
const { Search } = Input;

function MovieSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchValue = useSelector((state) => state.search.searchValue);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);

  function makeSearch() {
    if (isLoggedIn) {
      localStorage.setItem(`${userName}search${searchValue}`, searchValue);
    }
    navigate(`/search/${searchValue}/1`);
  }

  return (
    <Search
      placeholder="Search for a movie..."
      enterButton
      onChange={(e) => dispatch(changeSearchValue(e.target.value))}
      onSearch={() => {
        makeSearch();
      }}
    />
  );
}

export { MovieSearch };
