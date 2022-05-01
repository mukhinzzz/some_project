import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  isSearchingNow: true,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSearchingTrue: (state) => {
      state.isSearchingNow = true;
    },

    setSearchingFalse: (state) => {
      state.isSearchingNow = false;
    },
  },
});

export const { setSearchingTrue, setSearchingFalse, changeSearchValue } =
  searchSlice.actions;

export default searchSlice.reducer;
