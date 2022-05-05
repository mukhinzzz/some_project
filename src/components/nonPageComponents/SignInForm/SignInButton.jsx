import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import {
  setStatusLoggedIn,
  setEnteringUserName,
  setEnteringUserPassword,
} from "../../../features/userAuth/userAuthSlice";

function SignInButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userName = localStorage.getItem("userName");
  const userPassword = localStorage.getItem("userPassword");

  const enteringUserName = useSelector((state) => state.auth.enteringUserName);
  const enteringUserPassword = useSelector(
    (state) => state.auth.enteringUserPassword
  );

  function validateUserInfo() {
    if (enteringUserName === "" || enteringUserPassword === "") {
      alert("Пожалуйста, заполните оба поля");
      return;
    }

    if (enteringUserName !== userName) {
      alert("Такого логина не существует");
      return;
    }

    if (
      enteringUserName === userName &&
      enteringUserPassword !== userPassword
    ) {
      alert("Вы ввели неверный пароль");
      return;
    }

    if (
      enteringUserName === userName &&
      enteringUserPassword === userPassword
    ) {
      dispatch(setEnteringUserName(""));
      dispatch(setEnteringUserPassword(""));
      dispatch(setStatusLoggedIn());

      localStorage.setItem("isLoggedIn", true);

      alert("Succesfully Logged In");
      navigate("/");
    }
  }

  return (
    <Button type="primary" block onClick={() => validateUserInfo()}>
      Log In
    </Button>
  );
}

export { SignInButton };
