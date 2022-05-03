import { MovieInfo } from "../../nonPageComponents/MovieInfo/MovieInfo";

import { useDispatch } from "react-redux";

import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

function MovieInfoPage() {
  // const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());
  return <MovieInfo />;
}

export { MovieInfoPage };
