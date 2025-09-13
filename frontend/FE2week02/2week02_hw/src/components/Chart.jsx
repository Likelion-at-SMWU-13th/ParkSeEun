import SongItem from "./SongItem";
import data from "../Song.json";
import "../style/Song.css";

const Chart = () => {
  return (
    <div className="container">
      <img src="src\assets\spotify.png" id="logo" />
      <h3>대한민국 TOP 20</h3>
      <div>
        {data.songs.map((song) => (
          <SongItem key={song.rank} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Chart;
