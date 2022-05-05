import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { HistoryList } from "../../nonPageComponents/HistoryList/HistoryList";

function HistoryPage() {
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
      <h1 style={{ color: "white", textAlign: "center" }}>Вы искали:</h1>{" "}
      <HistoryList />
    </>
  );
}

export { HistoryPage };
