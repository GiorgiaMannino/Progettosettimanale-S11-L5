export const SET_SONGS = "SET_SONGS";
export const SET_SEARCHED_SONGS = "SET_SEARCHED_SONGS";

const initialState = {
  songs: {
    queen: [],
    katyperry: [],
    eminem: [],
    searchedSongs: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.payload.artistName]: action.payload.songs,
        },
      };

    case SET_SEARCHED_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          searchedSongs: action.payload.songs,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
