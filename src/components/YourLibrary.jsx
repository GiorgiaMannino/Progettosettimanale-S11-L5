import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteSong } from "../redux/actions";

function YourLibrary() {
  const dispatch = useDispatch();
  const favouriteSongs = useSelector((state) => state.favourites.favouriteSongs);

  const isFavourite = (song) => favouriteSongs.some((s) => s.id === song.id);

  const handleClick = (song) => {
    dispatch(toggleFavouriteSong(song));
  };

  return (
    <section className="col-12 col-md-9 offset-md-3 mainPage mb-5">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex"></div>
      </div>
      <h2 className="text-white mt-5 mb-5">Your Library</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {favouriteSongs.length ? (
          favouriteSongs.map(
            ({ id, title, album, artist }) =>
              album?.cover_medium && (
                <div className="col text-center" key={id}>
                  <img className="img-fluid" src={album.cover_medium} alt={title} />
                  <p className="mb-0 text-white">
                    Track: &quot;{title}&quot;
                    <br />
                    Artist: {artist.name}
                  </p>

                  <div className="d-flex justify-content-end">
                    <button
                      onClick={() => handleClick({ id, title, album, artist })}
                      className="btn"
                      style={{ background: "none", border: "none" }}
                    >
                      <i
                        className={`bi bi-heart${isFavourite({ id, title, album, artist }) ? "-fill" : ""} heart-icon ${
                          isFavourite({ id, title, album, artist }) ? "favourite" : ""
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              )
          )
        ) : (
          <p className="text-white">No songs added to favourites.</p>
        )}
      </div>
    </section>
  );
}

export default YourLibrary;
