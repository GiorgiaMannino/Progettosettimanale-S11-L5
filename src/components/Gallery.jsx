import { useDispatch, useSelector } from "react-redux";
import { setChosenSong, toggleFavouriteSong } from "../redux/actions";

const Gallery = ({ title, songs }) => {
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favourites.favouriteSongs);

  const isFavourite = (songId) => favouriteSongs.includes(songId);

  const handleClick = (song) => {
    console.log(song);
    dispatch(toggleFavouriteSong(song));
  };

  return (
    <div className="col-10">
      <div>
        <h2 className="pt-5 text-white">{title}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs.map((song) => (
            <div className="col text-center" key={song.id}>
              <img
                className="img-fluid"
                src={song.album.cover_medium}
                alt="track"
                onClick={() => {
                  console.log(song);
                  dispatch(setChosenSong(song));
                }}
              />

              <p>
                Track: &quot;{song.title}&quot;
                <br />
                Artist: {song.artist.name}
              </p>

              <div className="d-flex justify-content-end">
                <button
                  onClick={() => handleClick(song)}
                  className="btn"
                  style={{ background: "none", border: "none" }}
                >
                  <i
                    className={`bi bi-heart${isFavourite(song.id) ? "-fill" : ""} heart-icon ${
                      isFavourite(song.id) ? "favourite" : ""
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
