import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";

import { setEnteringUserName } from "../../../features/userAuth/userAuthSlice";

function SignInLoginInput() {
  const dispatch = useDispatch();
  const enteringUserName = useSelector((state) => state.auth.enteringUserName);

  return (
    <Input
      placeholder="Enter your username"
      value={enteringUserName}
      onChange={(e) => dispatch(setEnteringUserName(e.target.value))}
    />
  );
}

export { SignInLoginInput };
