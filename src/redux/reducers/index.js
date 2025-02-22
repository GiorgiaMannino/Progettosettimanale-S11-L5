import { SET_SONGS } from "../actions";

const initialState = {
  songs: {
    queen: [],
    katyperry: [],
    eminem: [],
  },
  error: null,
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

    default:
      return state;
  }
};

export default songReducer;
