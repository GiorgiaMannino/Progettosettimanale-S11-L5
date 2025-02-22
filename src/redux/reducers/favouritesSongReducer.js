export const TOGGLE_FAVOURITE_SONG = "TOGGLE_FAVOURITE_SONG";

const initialState = {
  favouriteSongs: [],
};

const favouritesSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_SONG: {
      const song = action.payload;
      const isAlreadyFavourite = state.favouriteSongs.some((s) => s.id === song.id);

      return {
        ...state,
        favouriteSongs: isAlreadyFavourite
          ? state.favouriteSongs.filter((s) => s.id !== song.id)
          : [...state.favouriteSongs, song],
      };
    }
    default:
      return state;
  }
};

export default favouritesSongReducer;
