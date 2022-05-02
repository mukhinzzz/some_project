import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setUserName,
  setUserPassword,
} from "../../../features/userAuth/userAuthSlice";

function SignUpButton() {
  const userPassword = useSelector((state) => state.auth.userPassword);
  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function validateRegisterInputs() {
    if (userName.length < 6 || userPassword.length < 6) {
      alert("Username and password length can't be less than 6 characters");
      dispatch(setUserName(""));
      dispatch(setUserPassword(""));
    } else {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userPassword", userPassword);
      dispatch(setUserName(""));
      dispatch(setUserPassword(""));
      alert(
        `You registered succesfully! You will be redirected to Log In page`
      );

      navigate("/signin");
    }
  }
  return (
    <Button type="primary" block onClick={() => validateRegisterInputs()}>
      Register
    </Button>
  );
}

export { SignUpButton };
