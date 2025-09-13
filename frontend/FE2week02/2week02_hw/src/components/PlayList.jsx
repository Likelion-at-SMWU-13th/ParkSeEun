import useMusicStore from "../stores/store";
import PlayListItem from "./PlayListItem";
import "../style/Song.css";

const PlayList = () => {
  const playlist = useMusicStore((s) => s.songs);
  return (
    <div className="container2">
      <h2 className="play">내 플레이리스트</h2>
      {playlist.map((song) => (
        <PlayListItem key={song.id} song={song} />
      ))}
    </div>
  );
};

export default PlayList;
