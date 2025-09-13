import SongItem from "./SongItem";
import data from "../Song.json";

const Chart = () => {
  return (
    <div className="container">
      <img src="src\assets\Logo.png" id="logo" />
      <h3>멜론차트 TOP 20</h3>
      <div>
        {data.songs.map((song) => (
          <SongItem key={song.rank} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Chart;
