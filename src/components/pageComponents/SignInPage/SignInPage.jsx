// import { Input, Button } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   saveEnteringUserName,
//   saveEnteringUserPassword,
// } from "../../features/userInfoSlice/userInfoSlice";
// import { setStatusLoggedIn } from "../../features/isLoggedIn/isLoggedInSlice";
// import { useNavigate } from "react-router-dom";

// function SignInPage() {
//   const userPassword = localStorage.getItem("userName");
//   const userName = localStorage.getItem("userPassword");
//   const enteringUserName = useSelector((state) => state.user.enteringUserName);
//   const enteringUserPassword = useSelector(
//     (state) => state.user.enteringUserPassword
//   );
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   function validateUserInfo() {
//     if (enteringUserName === "" || enteringUserPassword === "") {
//       alert("Пожалуйста, заполните оба поля");
//       return;
//     }

//     if (enteringUserName !== userName) {
//       alert("Такого логина не существует");
//       return;
//     }

//     if (
//       enteringUserName === userName &&
//       enteringUserPassword !== userPassword
//     ) {
//       alert("Вы ввели неверный пароль");
//       return;
//     }

//     if (
//       enteringUserName === userName &&
//       enteringUserPassword === userPassword
//     ) {
//       dispatch(saveEnteringUserName(""));
//       dispatch(saveEnteringUserPassword(""));
//       dispatch(setStatusLoggedIn());

//       localStorage.setItem("isLoggedIn", true);

//       alert("Succesfully Logged In");
//       navigate("/");
//     }
//   }

//   return (
//     <div>
//       <Input
//         placeholder="Enter your username"
//         value={enteringUserName}
//         onChange={(e) => dispatch(saveEnteringUserName(e.target.value))}
//       />
//       <Input.Password
//         placeholder="Enter your password"
//         value={enteringUserPassword}
//         onChange={(e) => dispatch(saveEnteringUserPassword(e.target.value))}
//         iconRender={(visible) =>
//           visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//         }
//       />
//       <Button type="primary" block onClick={() => validateUserInfo()}>
//         Log In
//       </Button>
//     </div>
//   );
// }

// export { SignInPage };

import { SignInLoginInput } from "../../nonPageComponents/SignInForm/SignInLoginInput";
import { SignInPasswordInput } from "../../nonPageComponents/SignInForm/SignInPasswordInput";
import { SignInButton } from "../../nonPageComponents/SignInForm/SignInButton";

function SignInPage() {
  return (
    <>
      <SignInLoginInput /> <SignInPasswordInput /> <SignInButton />
    </>
  );
}

export { SignInPage };
