import { HistoryList } from "../../nonPageComponents/HistoryList/HistoryList";

function HistoryPage() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Вы искали:</h1>{" "}
      <HistoryList />
    </>
  );
}

export { HistoryPage };
