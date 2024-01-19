import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const NavbarFlexBottom = () => {

  const fetchCurrentSong = useSelector((state) => state.fetchCurrentSong);
  

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1" >
      <div className="row h-100 position-relative">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 mx-3   align-items-center">
            {fetchCurrentSong && fetchCurrentSong.album ? (<div className="col-6 text-light d-flex">
              <img src={fetchCurrentSong.album.cover} alt="" style={{width:"4em"}} />
              <div className="mx-2 d-flex flex-column justify-content-center">
                <p className="m-0">{fetchCurrentSong.title_short}</p>
                <p className="m-0">{fetchCurrentSong.artist.name}</p>
              </div>
            </div>): null}
            <div className="col-6 col-md-4 playerControls " style={{ position: 'absolute', left: '55%', transform: 'translateX(-50%)' }}>
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
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
  );
};
export default NavbarFlexBottom;
