import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: "select",
  initialState: {
    isSelecting: true,
    blue: false,
    grey: false,
    red: false,
  },
  reducers: {
    selectBlue(state) {
        state.isSelecting = false;
        state.blue = true;
    },
    selectGrey(state) {
        state.isSelecting = false;
        state.grey = true;
    },
    selectRed(state) {
        state.isSelecting = false;
        state.red = true;
    },
  },
});

export const selectActions = selectSlice.actions;

export default selectSlice;
