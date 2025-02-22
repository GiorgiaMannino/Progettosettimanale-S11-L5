export const SET_SONGS = "SET_SONGS";
export const SET_CHOSEN_SONG = "SET_CHOSEN_SONG";

const initialState = {
  songs: {
    queen: [],
    katyperry: [],
    eminem: [],
  },
  chosenSong: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.payload.artistName]: action.payload.songs,
        },
      };

    case SET_CHOSEN_SONG:
      return {
        ...state,
        chosenSong: action.payload,
      };

    default:
      return state;
  }
};

export default songReducer;
