import { useDispatch } from "react-redux";
import { setChosenSong } from "../redux/actions";

const Gallery = ({ title, songs }) => {
  const dispatch = useDispatch();

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
                onClick={() => dispatch(setChosenSong(song))}
              />
              <p>
                Track: &quot;{song.title}&quot;
                <br />
                Artist: {song.artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
