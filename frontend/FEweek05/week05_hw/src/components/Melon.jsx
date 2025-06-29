import { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Song";
import "./Song.css";

const Melon = () => {
  const [melon, setMelon] = useState([]);
  const [isDesc, setDesc] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/melon")
      .then((res) => {
        setMelon(res.data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  const sortByRank = () => {
    const sorted = [...melon].sort((a, b) =>
      isDesc ? b.rank - a.rank : a.rank - b.rank
    );
    setMelon(sorted);
    setDesc(!isDesc);
  };

  return (
    <div className="container">
      <img src="src\assets\Logo.png" id="logo" />
      <h3>멜론차트 TOP 10</h3>
      <button onClick={sortByRank}>
        {isDesc ? "랭크 내림차순" : "랭크 오름차순"}
      </button>

      <div>
        {melon.map((song) => (
          <Song key={song.rank} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Melon;
