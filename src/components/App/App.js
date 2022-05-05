import { Routes, Route } from "react-router-dom";

import { AppContext } from "../nonPageComponents/AppContext/AppContext";

import { Header } from "../nonPageComponents/Header/Header";
import { MainPage } from "../pageComponents/MainPage/MainPage";
import { SignInPage } from "../pageComponents/SignInPage/SignInPage";
import { SignUpPage } from "../pageComponents/SignUpPage/SignUpPage";
import { FavoritesPage } from "../pageComponents/FavoritesPage/FavoritesPage";
import { HistoryPage } from "../pageComponents/HistoryPage/HistoryPage";
import { MovieInfoPage } from "../pageComponents/MovieInfoPage/MovieInfoPage";
import { SearchResultsPage } from "../pageComponents/SearchResultsPage/SearchResultsPage";
import { ErrorBoundary } from "../nonPageComponents/ErrorBoundary/ErrorBoundary";

function App() {
  const placeholder =
    "https://imgholder.ru/240x350/8493a8/adb9ca&text=NO+POSTER&font=kelson";
  //This placeholder was created for demonstrating Context API using

  return (
    <>
      <AppContext.Provider value={{ placeholder }}>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="movie/:id" element={<MovieInfoPage />} />
            <Route
              path="search/:query/:pageNumber"
              element={<SearchResultsPage />}
            />
          </Routes>
        </ErrorBoundary>
      </AppContext.Provider>
    </>
  );
}

export default App;
