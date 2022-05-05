import { Link } from "react-router-dom";
import { Button, Space } from "antd";

function ButtonsForGuest() {
  return (
    <Space>
      <Link to="/signin">
        <Button>Log In</Button>
      </Link>

      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </Space>
  );
}
export { ButtonsForGuest };
