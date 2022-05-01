// import { useParams } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import {
//   setSearchingTrue,
//   setSearchingFalse,
// } from "../../features/search/searchSlice";
// import { setMoviesSearchData } from "../../features/moviesData/moviesDataSlice";

// function useSearchQuery(dispatch, query, pageNumber) {
//   // const dispatch = useDispatch();
//   // const { query, pageNumber } = useParams();

//   return (
//     useDispatch(setSearchingTrue()),
//     fetch(
//       `http://www.omdbapi.com/?apikey=b668f6de&s=${query}&page=${pageNumber}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(setMoviesSearchData(data));
//         dispatch(setSearchingFalse());
//       })
//   );
// }

// export { useSearchQuery };
