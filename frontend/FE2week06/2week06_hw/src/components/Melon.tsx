import { useEffect, useState } from "react";
import axios from "axios";
import SongComponent from "../components/Song";
import type { Song } from "../types/song";
import "./Song.css";

const Melon = () => {
  const [melon, setMelon] = useState<Song[]>([]);
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
    setMelon(
      [...melon].sort((a, b) =>
        isDesc ? (b.rank ?? 0) - (a.rank ?? 0) : (a.rank ?? 0) - (b.rank ?? 0)
      )
    );
    setDesc(!isDesc);
  };

  const filterSong = melon.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <img src="src/assets/Logo.png" id="logo" />
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
          <SongComponent key={`${song.rank}-${song.title}`} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Melon;
