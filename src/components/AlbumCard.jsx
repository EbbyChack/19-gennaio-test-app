import { useDispatch } from "react-redux";
import { setCurrentSong, setLike } from "../redux/actions";
import { useSelector } from "react-redux";

const AlbumCard = function (songInfo) {
  const dispatch = useDispatch();

  const handleSongClick = () => {
    dispatch(setCurrentSong(songInfo));
  };
  const handleLike = () => {
    dispatch(setLike(songInfo));
  };

  const likedSongs = useSelector((state) => state.likedSongs);
  console.log(likedSongs);
  const isLiked = likedSongs.some((likedSong) => likedSong.id === songInfo.id);

  return (
    <div className="col text-center position-relative " id={songInfo.id} onClick={handleSongClick}>
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p>
        Track: "{songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}
      </p>

      {isLiked ? (
        <i
          className="btn btn-dark bi bi-heart-fill position-absolute text-success  px-2 py-1 rounded-5"
          style={{ right: "15px", top: "3px" }}
          onClick={handleLike}
        ></i>
      ) : (
        <i
          className="btn btn-dark bi bi-heart position-absolute  px-2 py-1 rounded-5"
          style={{ right: "15px", top: "3px" }}
          onClick={handleLike}
        ></i>
      )}
    </div>
  );
};

export default AlbumCard;
