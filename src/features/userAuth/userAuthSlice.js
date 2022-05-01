import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.isLoggedIn ?? false,
  userName: localStorage.userName ?? "",
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
  },
});

export const { setStatusLoggedIn, setStatusNotLoggedIn } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;
