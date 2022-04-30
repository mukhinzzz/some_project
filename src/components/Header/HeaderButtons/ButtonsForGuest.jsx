import { Link } from "react-router-dom";
import { Button, Space } from "antd";

function ButtonsForGuest() {
  return (
    <Space>
      <Link to="/signin">
        <Button key="2">Log In</Button>
      </Link>

      <Link to="/signup">
        <Button key="1">Sign Up</Button>
      </Link>
    </Space>
  );
}
export { ButtonsForGuest };
