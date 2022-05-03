import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import debounce from "lodash.debounce";

import {
  changeSearchValue,
  // setSearchingFalse,
  setSearchingTrue,
  changeFastSearchData,
  setFastSearchDataNotReceived,
  setFastSearchDataReceived,
} from "../../../features/search/searchSlice";

import { FastSearchResults } from "../FastSearchResults/FastSearchResults";

import { Input } from "antd";
const { Search } = Input;

function MovieSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchValue = useSelector((state) => state.search.searchValue);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = localStorage.getItem("userName");

  let fastSearchData = useSelector((state) => state.search.fastSearchData);
  let isFastSearchDataReceived = useSelector(
    (state) => state.search.isFastSearchDataReceived
  );
  // const userName = useSelector((state) => state.auth.userName);

  function updateQuery(e) {
    dispatch(changeSearchValue(e.target.value));
    console.log("on change");

    // dispatch(setSearchingTrue());

    fetch(`http://www.omdbapi.com/?apikey=b668f6de&s=${e.target.value}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(changeFastSearchData(data));
        dispatch(setFastSearchDataReceived());
      });
  }

  const debouncedQueryUpdate = debounce(updateQuery, 1000);

  function makeSearch() {
    if (isLoggedIn) {
      localStorage.setItem(`${userName}search${searchValue}`, searchValue);
    }
    navigate(`/search/${searchValue}/1`);
  }

  console.log(isFastSearchDataReceived);

  return (
    <>
      <Search
        placeholder="Search for a movie..."
        enterButton
        onChange={debouncedQueryUpdate}
        onSearch={() => {
          makeSearch();
        }}
      />
      {isFastSearchDataReceived ? <FastSearchResults /> : ""}
    </>
  );
}

export { MovieSearch };
