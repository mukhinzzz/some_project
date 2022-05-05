import { FavoritesList } from "../../nonPageComponents/FavoritesList/FavoritesList";

function FavoritesPage() {
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
