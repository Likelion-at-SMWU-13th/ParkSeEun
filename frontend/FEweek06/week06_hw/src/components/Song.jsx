import React from "react";
import "./Song.css";

const Song = ({ song }) => {
  const { rank, title, artist, album, poster, duration } = song;

  return (
    <div class="song-box">
      <img src={poster} alt={title} />
      <div class="song-info">
        <h2>
          {rank}. {title}
        </h2>
        <p>{artist}</p>
        <p>{album}</p>
        {duration && <p>{duration}</p>}
      </div>
    </div>
  );
};

export default Song;
