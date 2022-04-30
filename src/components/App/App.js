import { Routes, Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { MainPage } from "../MainPage/MainPage";
import { SignInPage } from "../SignInPage/SignInPage";
import { SignUpPage } from "../SignUpPage/SignUpPage";
import { FavoritesPage } from "../FavoritesPage/FavoritesPage";
import { HistoryPage } from "../HistoryPage/HistoryPage";
import { FilmInfoPage } from "../FilmInfoPage/FilmInfoPage";
import { SearchResultsPage } from "../SearchResultsPage/SearchResultsPage";

import "./App.css";
//СТИЛЕЙ ПОКА НЕТ (если их не будет, удалить строку выше вместе с файлом App.css)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="search/:query/:pageNumber"
          element={<SearchResultsPage />}
        />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="film/:id" element={<FilmInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
