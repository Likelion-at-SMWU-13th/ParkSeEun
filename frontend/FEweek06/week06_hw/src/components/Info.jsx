import { useLocation, Link } from "react-router-dom";
import "./Song.css";

const Info = () => {
  const location = useLocation();
  const song = location.state?.song;

  const { rank, title, artist, album, poster, duration } = song;

  return (
    <div>
      <div className="song-box">
        <h1>{rank}</h1>
        <img src={poster} alt={title} />
        <div className="song-info">
          <h2>{title}</h2>
          <p>{artist}</p>
          <p>{album}</p>
          {duration && <p>{duration}</p>}
        </div>
      </div>
      <div>
        <Link to="/" className="link-btn">
          X
        </Link>
      </div>
    </div>
  );
};

export default Info;
