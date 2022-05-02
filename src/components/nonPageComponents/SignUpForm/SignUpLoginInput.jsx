import { Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../../features/userAuth/userAuthSlice";

function SignUpLoginInput() {
  const userName = useSelector((state) => state.auth.userName);

  const dispatch = useDispatch();

  return (
    <Input
      placeholder="Enter your username"
      value={userName}
      onChange={(e) => dispatch(setUserName(e.target.value))}
    />
  );
}

export { SignUpLoginInput };
