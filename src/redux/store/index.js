import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chosenSongReducer from "../reducers/chosenSongReducer";
import mainReducer from "../reducers";
import favouritesSongReducer from "../reducers/favouritesSongReducer";

const rootReducer = combineReducers({
  song: mainReducer,
  chosenSong: chosenSongReducer,
  favourites: favouritesSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
