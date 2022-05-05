import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PageHeader } from "antd";

import { ButtonsForUser } from "./HeaderButtons/ButtonsForUser";
import { ButtonsForGuest } from "./HeaderButtons/ButtonsForGuest";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let buttons = isLoggedIn ? <ButtonsForUser /> : <ButtonsForGuest />;

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={<Link to="/">Some movies...</Link>}
        extra={buttons}
        style={{ backgroundColor: "#f2ecf6" }}
      ></PageHeader>
    </div>
  );
}

export { Header };
