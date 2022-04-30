import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setStatusNotLoggedIn } from "../features/userAuth/userAuthSlice";

function useLogOut() {
  useDispatch(setStatusNotLoggedIn());
  localStorage.setItem("isLoggedIn", false);

  alert("You logged out");

  useNavigate("/");
}

export { useLogOut };
