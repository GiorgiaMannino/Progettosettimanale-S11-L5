export const TOGGLE_FAVOURITE_SONG = "TOGGLE_FAVOURITE_SONG";

const initialState = {
  favouriteSongs: [],
};

const favouritesSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_SONG: {
      const songId = action.payload.id;

      return {
        ...state,
        favouriteSongs: state.favouriteSongs.includes(songId)
          ? state.favouriteSongs.filter((id) => id !== songId)
          : [...state.favouriteSongs, songId],
      };
    }
    default:
      return state;
  }
};

export default favouritesSongReducer;
