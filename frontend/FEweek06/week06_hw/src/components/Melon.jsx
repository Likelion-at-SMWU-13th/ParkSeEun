import { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Song";
import "./Song.css";

const Melon = () => {
  const [melon, setMelon] = useState([]);
  const [isDesc, setDesc] = useState(true);
  const [search, setSearch] = useState("");

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

  const filterSong = melon.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <img src="src\assets\Logo.png" id="logo" />
      <h3>멜론차트 TOP 20</h3>
      <div className="search-box">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={sortByRank}>
          {isDesc ? "랭크 내림차순" : "랭크 오름차순"}
        </button>
      </div>
      <div>
        {filterSong.map((song) => (
          <Song key={song.rank} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Melon;
