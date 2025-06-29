import { useEffect, useState } from "react";
import axios from "axios";

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
        {melon.map((melons) => (
          <div key={melons.rank}>
            <img src={melons.poster} alt={melons.title} />
            <div>
              <h2>{melons.title}</h2>
              <p>{melons.artist}</p>
              <p>{melons.album}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Melon;
