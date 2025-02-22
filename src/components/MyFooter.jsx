import { useSelector } from "react-redux";
import shuffleImg from "../assets/playerbuttons/shuffle.png";
import prevImg from "../assets/playerbuttons/prev.png";
import playImg from "../assets/playerbuttons/play.png";
import nextImg from "../assets/playerbuttons/next.png";
import repeatImg from "../assets/playerbuttons/repeat.png";

const MyFooter = () => {
  const chosenSong = useSelector((state) => state.chosenSong.chosenSong);

  return (
    <footer className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-between align-items-center col-12">
              {chosenSong && (
                <div className="col-6 col-md-4 d-flex align-items-center justify-content-start mt-3">
                  <img
                    src={chosenSong.album.cover_medium}
                    alt={chosenSong.title}
                    className="playerImage"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                  <div className="songDetails ms-3">
                    <p className="songTitle text-white m-0">{chosenSong.title}</p>
                    <p className="songArtist text-white m-0">{chosenSong.artist.name}</p>
                  </div>
                </div>
              )}
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffleImg} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prevImg} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={playImg} alt="play" />
                  </a>
                  <a href="#">
                    <img src={nextImg} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeatImg} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
