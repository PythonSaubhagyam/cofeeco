// src/redux/isMobileViewSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileView: false,  // default state for mobile view
};

const isMobileViewSlice = createSlice({
  name: "isMobileView",
  initialState,
  reducers: {
    setIsMobileView: (state, action) => {
      state.isMobileView = action.payload;
    },
  },
});

export const { setIsMobileView } = isMobileViewSlice.actions;

export default isMobileViewSlice.reducer;
