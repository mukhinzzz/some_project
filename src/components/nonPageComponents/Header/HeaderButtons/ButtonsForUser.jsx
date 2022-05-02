import { Link } from "react-router-dom";

import { Button, Space } from "antd";

import { useLogOut } from "../../../../hooks/useLogOut";

function ButtonsForUser() {
  const logOut = useLogOut();

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

//ПОПРОБОВАТЬ ИМПОРТИРОВАННЫЙ ХУК USELOGOUT, ЕСЛИ ОН НЕ ЗАРАБОТАЕТ - ПЕРЕНЕСТИ ФУНКЦИЮ ВНУТРЬ ЭТОГО ФАЙЛА

export { ButtonsForUser };
