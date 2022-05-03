import { Routes, Route } from "react-router-dom";

import { Header } from "../nonPageComponents/Header/Header";
import { MainPage } from "../pageComponents/MainPage/MainPage";
import { SignInPage } from "../pageComponents/SignInPage/SignInPage";
import { SignUpPage } from "../pageComponents/SignUpPage/SignUpPage";
import { FavoritesPage } from "../pageComponents/FavoritesPage/FavoritesPage";
import { HistoryPage } from "../pageComponents/HistoryPage/HistoryPage";
import { MovieInfoPage } from "../pageComponents/MovieInfoPage/MovieInfoPage";
import { SearchResultsPage } from "../pageComponents/SearchResultsPage/SearchResultsPage";
import { ErrorBoundary } from "../nonPageComponents/ErrorBoundary/ErrorBoundary";

import "./App.css";
//СТИЛЕЙ ПОКА НЕТ (если их не будет, удалить строку выше вместе с файлом App.css)

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
