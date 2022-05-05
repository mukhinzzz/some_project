import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { FavoritesList } from "../../nonPageComponents/FavoritesList/FavoritesList";

function FavoritesPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function checkAuth() {
    if (!isLoggedIn) {
      navigate(`/signin`);
    }
  }

  useEffect(() => checkAuth());

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Вы добавили в избранное:
      </h1>
      <FavoritesList />
    </>
  );
}

export { FavoritesPage };
