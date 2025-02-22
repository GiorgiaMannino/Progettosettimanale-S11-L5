import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chosenSongReducer from "../reducers/chosenSongReducer";
import mainReducer from "../reducers";

const rootReducer = combineReducers({
  song: mainReducer,
  chosenSong: chosenSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
