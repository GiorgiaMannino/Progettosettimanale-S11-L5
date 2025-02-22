export const SET_CHOSEN_SONG = "SET_CHOSEN_SONG";

const initialState = {
  chosenSong: null,
};

const chosenSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOSEN_SONG:
      console.log(action.payload);
      return {
        ...state,
        chosenSong: action.payload,
      };

    default:
      return state;
  }
};

export default chosenSongReducer;
