import { FavoritesList } from "../../nonPageComponents/FavoritesList/FavoritesList";
import { useDispatch } from "react-redux";
import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

function FavoritesPage() {
  // const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());

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
