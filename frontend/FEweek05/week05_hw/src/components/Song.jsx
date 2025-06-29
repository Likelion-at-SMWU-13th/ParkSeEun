import React from "react";

const Song = ({ song }) => {
  const { rank, title, artist, album, poster, duration } = song;

  return (
    <div>
      <img src={poster} alt={title} />
      <div>
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
