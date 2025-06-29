import { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Song";

const Melon = () => {
  const [melon, setMelon] = useState([]);

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

  return (
    <div>
      <h3>멜론차트</h3>
      <div>
        {melon.map((song) => (
          <Song key={song.rank} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Melon;
