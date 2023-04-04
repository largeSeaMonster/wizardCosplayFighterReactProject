import { configureStore } from '@reduxjs/toolkit';

import selectSlice from './select-slice';
import blueGameSlice from './blueGame-slice';

const store = configureStore({
  reducer: { select: selectSlice.reducer, blueGame: blueGameSlice.reducer },
});

export default store;