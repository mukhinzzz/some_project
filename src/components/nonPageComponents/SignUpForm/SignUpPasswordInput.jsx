import { Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { setUserPassword } from "../../../features/userAuth/userAuthSlice";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function SignUpPasswordInput() {
  const dispatch = useDispatch();
  const userPassword = useSelector((state) => state.auth.userPassword);

  return (
    <Input.Password
      placeholder="Enter your password"
      value={userPassword}
      onChange={(e) => dispatch(setUserPassword(e.target.value))}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
}

export { SignUpPasswordInput };
