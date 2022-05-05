import { createSlice } from "@reduxjs/toolkit";

let loggedInLocalStorage = localStorage.getItem("isLoggedIn");
if (loggedInLocalStorage === "false") {
  loggedInLocalStorage = false;
} else if (loggedInLocalStorage === "true") {
  loggedInLocalStorage = true;
} else {
  loggedInLocalStorage = false;
}

const initialState = {
  isLoggedIn: loggedInLocalStorage ?? false,
  userName: "",
  userPassword: "",
  enteringUserName: "",
  enteringUserPassword: "",
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setStatusLoggedIn: (state) => {
      state.isLoggedIn = true;
    },

    setStatusNotLoggedIn: (state) => {
      state.isLoggedIn = false;
    },

    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },

    setEnteringUserName: (state, action) => {
      state.enteringUserName = action.payload;
    },

    setEnteringUserPassword: (state, action) => {
      state.enteringUserPassword = action.payload;
    },
  },
});

export const {
  setStatusLoggedIn,
  setStatusNotLoggedIn,
  setUserName,
  setUserPassword,
  setEnteringUserName,
  setEnteringUserPassword,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
