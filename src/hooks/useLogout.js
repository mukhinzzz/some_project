import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setStatusNotLoggedIn } from "../features/userAuth/userAuthSlice";

function useLogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(setStatusNotLoggedIn());
    localStorage.setItem("isLoggedIn", false);

    alert("You logged out");

    navigate("/");
  };

  return logOut;
}

export { useLogOut };
