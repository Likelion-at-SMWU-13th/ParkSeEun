import { useLocation, Link } from "react-router-dom";
import "./Song.css";

const Info = () => {
  const location = useLocation();
  const song = location.state?.song;

  const { title, artist, album, poster, duration } = song;

  return (
    <div className="container">
      <div className="song-box2">
        <img src="src\assets\Logo2.png" id="logo2" />
        <img id="info-img" src={poster} alt={title} />
        <div className="song-info2">
          <h2 className="info-title">{title}</h2>
          <p className="info-p">{artist}</p>
          <p className="info-p">{album}</p>
          {duration && <p className="info-p">{duration}</p>}
        </div>
      </div>
      <Link to="/" className="link-btn">
        <button className="back-btn">뒤로 가기</button>
      </Link>
    </div>
  );
};

export default Info;
