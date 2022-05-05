import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.isLoggedIn ?? false,
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
