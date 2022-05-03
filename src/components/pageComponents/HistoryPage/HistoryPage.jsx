import { HistoryList } from "../../nonPageComponents/HistoryList/HistoryList";

import { useDispatch } from "react-redux";

import { setFastSearchDataNotReceived } from "../../../features/search/searchSlice";

function HistoryPage() {
  // const dispatch = useDispatch();
  // const fastSearchReset = dispatch(setFastSearchDataNotReceived());
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Вы искали:</h1>{" "}
      <HistoryList />
    </>
  );
}

export { HistoryPage };
