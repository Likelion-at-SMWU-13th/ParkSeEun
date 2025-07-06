import React from "react";
import "./Song.css";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
  const { rank, title, artist, album, poster, duration } = song;

  return (
    <Link to="/info" state={{ song }} className="link-btn">
      <div className="song-box">
        <h1>{rank}</h1>
        <img src={poster} alt={title} />
        <div className="song-info">
          <h2>{title}</h2>
          <p>{artist}</p>
          <p>{album}</p>
          {duration && <p className="song-du">{duration}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Song;
