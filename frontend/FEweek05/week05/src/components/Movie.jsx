import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/movies").then((res) => {
      const actionMovies = res.data.filter((movie) => movie.genre === "액션");
      setMovies(actionMovies);
    });
  }, []);

  return (
    <div>
      <h3>무비차트</h3>
      <div>
        {movie.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p> {movie.rating}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
