import "../style/Song.css";
import minus from "../assets/minus.svg";
import heart1 from "../assets/heart1.svg";
import useMusicStore from "../stores/store";

const PlayListItem = ({ song }) => {
  const removeSong = useMusicStore((s) => s.removeSong);
  const likeSong = useMusicStore((s) => s.likeSong);

  return (
    <div className="song-box2">
      <img
        className="song-minus"
        src={minus}
        onClick={() => removeSong(song.id)}
      />
      <img src={song.poster} alt={song.title} id="play-img" />
      <div className="song-info2">
        <h2 id="play-title">{song.title}</h2>
        {song.duration && <p className="song-du">{song.duration}</p>}
      </div>
      <img
        className="song-minus"
        src={heart1}
        onClick={() => likeSong(song.id)}
      />
    </div>
  );
};

export default PlayListItem;
