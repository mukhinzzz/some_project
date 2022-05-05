import { Link } from "react-router-dom";
import "./HistoryList.css";

function HistoryList() {
  let keys = Object.keys(localStorage);
  const userName = localStorage.getItem("userName");

  let searchKeys = keys.filter((key) => key.startsWith(`${userName}search`));

  let searchValues = searchKeys.map((key) => localStorage.getItem(key));

  let historyCards = searchValues.map((value) => (
    <Link to={`/search/${value}/1`} key={value}>
      <p className="history-link">{value}</p>
    </Link>
  ));

  return <div className="history-container">{historyCards}</div>;
}

export { HistoryList };
