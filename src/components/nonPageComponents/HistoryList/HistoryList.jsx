import { Link } from "react-router-dom";
import "./HistoryList.css";

function HistoryList() {
  let keys = Object.keys(localStorage);
  console.log(keys);
  const userName = localStorage.getItem("userName");
  console.log(userName);

  let searchKeys = keys.filter((key) => key.startsWith(`${userName}search`));
  console.log(searchKeys);

  let searchValues = searchKeys.map((key) => localStorage.getItem(key));

  console.log(searchValues);

  let historyCards = searchValues.map((value) => (
    <Link to={`/search/${value}/1`} key={value}>
      <p className="history-link">{value}</p>
    </Link>
  ));

  return <div className="history-container">{historyCards}</div>;
}

export { HistoryList };
