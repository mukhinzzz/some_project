import { Link } from "react-router-dom";

import { Button, Space } from "antd";

import { useLogOut } from "../../../../hooks/useLogOut";

function ButtonsForUser() {
  const logOut = useLogOut();

  return (
    <Space>
      <Link to="/favorites">
        <Button key="3">Favorites</Button>
      </Link>
      <Link to="/history">
        <Button key="4">History</Button>
      </Link>
      <Button key="5" type="primary" onClick={() => logOut()}>
        Log Out
      </Button>
      <span>{localStorage.getItem("userName")}</span>
    </Space>
  );
}

export { ButtonsForUser };
