export const SET_SONGS = "SET_SONGS";
export const SET_CHOSEN_SONG = "SET_CHOSEN_SONG";

// fetch per recuperare le canzoni con l'artista dinamico
export const fetchSongsAction = (artistName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SET_SONGS,
          payload: { artistName, songs: data.slice(0, 4) },
        });
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

// azione selezione della canzone
export const setChosenSong = (song) => ({
  type: SET_CHOSEN_SONG,
  payload: song,
});
