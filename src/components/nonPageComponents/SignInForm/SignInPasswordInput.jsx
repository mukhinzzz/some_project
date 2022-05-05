import { useDispatch, useSelector } from "react-redux";

import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { setEnteringUserPassword } from "../../../features/userAuth/userAuthSlice";

function SignInPasswordInput() {
  const enteringUserPassword = useSelector(
    (state) => state.auth.enteringUserPassword
  );
  const dispatch = useDispatch();

  return (
    <Input.Password
      placeholder="Enter your password"
      value={enteringUserPassword}
      onChange={(e) => dispatch(setEnteringUserPassword(e.target.value))}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
}

export { SignInPasswordInput };
