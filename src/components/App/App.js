import { Routes, Route } from "react-router-dom";

import { Header } from "../nonPageComponents/Header/Header";
import { MainPage } from "../pageComponents/MainPage/MainPage";
import { SignInPage } from "../pageComponents/SignInPage/SignInPage";
import { SignUpPage } from "../pageComponents/SignUpPage/SignUpPage";
import { FavoritesPage } from "../pageComponents/FavoritesPage/FavoritesPage";
import { HistoryPage } from "../pageComponents/HistoryPage/HistoryPage";
import { FilmInfoPage } from "../pageComponents/FilmInfoPage/FilmInfoPage";
import { SearchResultsPage } from "../pageComponents/SearchResultsPage/SearchResultsPage";

import "./App.css";
//СТИЛЕЙ ПОКА НЕТ (если их не будет, удалить строку выше вместе с файлом App.css)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="film/:id" element={<FilmInfoPage />} />
        <Route
          path="search/:query/:pageNumber"
          element={<SearchResultsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
