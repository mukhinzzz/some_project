import { Link } from "react-router-dom";

import { Button, Space } from "antd";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setStatusNotLoggedIn } from "../../../../features/userAuth/userAuthSlice";

function ButtonsForUser() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function logOut() {
    dispatch(setStatusNotLoggedIn());
    localStorage.setItem("isLoggedIn", false);

    alert("You logged out");

    navigate("/");
  }

  return (
    <Space>
      <Link to="/favorites">
        <Button>Favorites</Button>
      </Link>
      <Link to="/history">
        <Button>History</Button>
      </Link>
      <Button type="primary" onClick={() => logOut()}>
        Log Out
      </Button>
      <span>{localStorage.getItem("userName")}</span>
    </Space>
  );
}

export { ButtonsForUser };
