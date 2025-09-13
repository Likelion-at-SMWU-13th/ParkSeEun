import useMusicStore from "../stores/store";
import add from "../assets/add.svg";

const SongItem = ({ song }) => {
  const addSong = useMusicStore((s) => s.addSong);

  return (
    <div className="song-box">
      <h1>{song.rank}</h1>
      <img src={song.poster} alt={song.title} onClick={() => addSong(song)} />
      <div className="song-info">
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        {song.duration && <p className="song-du">{song.duration}</p>}
      </div>
      <img src={add} />
    </div>
  );
};

export default SongItem;
