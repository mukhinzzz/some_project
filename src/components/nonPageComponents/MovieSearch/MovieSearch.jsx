import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import debounce from "lodash.debounce";

import {
  changeFastSearchData,
  setFastSearchDataNotReceived,
  setFastSearchDataReceived,
} from "../../../features/search/searchSlice";

import { FastSearchResults } from "../FastSearchResults/FastSearchResults";

import { Input } from "antd";
const { Search } = Input;

const API_KEY = process.env.API_KEY;

function MovieSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = localStorage.getItem("userName");

  let isFastSearchDataReceived = useSelector(
    (state) => state.search.isFastSearchDataReceived
  );

  function updateQuery(e) {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${e.target.value}&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          dispatch(changeFastSearchData(data));
          dispatch(setFastSearchDataReceived());
        }
      });
  }

  let searchValue;

  const debouncedQueryUpdate = debounce(updateQuery, 700);

  function makeSearch() {
    if (isLoggedIn) {
      localStorage.setItem(`${userName}search${searchValue}`, searchValue);
    }
    navigate(`/search/${searchValue}/1`);
  }

  useEffect(() => {
    return () => dispatch(setFastSearchDataNotReceived());
  }, []);

  return (
    <>
      <Search
        placeholder="Search for a movie..."
        enterButton
        onChange={(e) => {
          searchValue = e.target.value;
          debouncedQueryUpdate(e);
        }}
        onSearch={(e) => {
          debouncedQueryUpdate.cancel();
          makeSearch();
        }}
      />
      {isFastSearchDataReceived ? <FastSearchResults /> : ""}
    </>
  );
}

export { MovieSearch };
