import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsAction } from "../redux/actions";
import Gallery from "./Gallery";

const Main = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.song.error);
  const { queen, katyperry, eminem, searchedSongs } = useSelector((state) => state.song.songs);

  useEffect(() => {
    dispatch(fetchSongsAction("queen"));
    dispatch(fetchSongsAction("katyperry"));
    dispatch(fetchSongsAction("eminem"));
  }, [dispatch]);

  if (error) {
    return <p className="text-danger">Errore: {error}</p>;
  }

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage mb-5 ">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      {/* galleria dinamica per la ricerca */}
      {searchedSongs?.length > 0 && (
        <Gallery title={`Results for "${searchedSongs[0].artist.name}"`} songs={searchedSongs} />
      )}

      {/* gallerie fisse per gli artisti */}
      <Gallery title="Queen" songs={queen} />
      <Gallery title="Katy Perry" songs={katyperry} />
      <Gallery title="Eminem" songs={eminem} />
    </main>
  );
};

export default Main;
