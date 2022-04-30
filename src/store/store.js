import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "../features/userAuth/userAuthSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthSlice,
  },
});
