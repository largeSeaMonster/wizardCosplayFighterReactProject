import { createSlice } from "@reduxjs/toolkit";

const blueGameSlice = createSlice({
  name: "blueGame",
  initialState: {
    generalIntro: true,
    greyIntro: false,
  },
  reducers: {
    greyIntro(state) {
      state.generalIntro = false;
      state.greyIntro = true;
    },
  },
});

export const blueGameActions = blueGameSlice.actions;

export default blueGameSlice;