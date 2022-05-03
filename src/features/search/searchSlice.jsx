import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  fastSearchData: {},
  isSearchingNow: true,
  isFastSearchDataReceived: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    changeFastSearchData: (state, action) => {
      state.fastSearchData = action.payload;
    },

    setSearchingTrue: (state) => {
      state.isSearchingNow = true;
    },

    setSearchingFalse: (state) => {
      state.isSearchingNow = false;
    },

    setFastSearchDataReceived: (state) => {
      state.isFastSearchDataReceived = true;
    },

    setFastSearchDataNotReceived: (state) => {
      state.isFastSearchDataReceived = false;
    },
  },
});

export const {
  setSearchingTrue,
  setSearchingFalse,
  changeSearchValue,
  changeFastSearchData,
  setFastSearchDataReceived,
  setFastSearchDataNotReceived,
} = searchSlice.actions;

export default searchSlice.reducer;
