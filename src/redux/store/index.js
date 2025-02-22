import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

export default store;
