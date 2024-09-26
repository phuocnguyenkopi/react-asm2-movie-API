import { useEffect, useState } from "react";
import classes from "./Banner.module.css";
import { fetchApi, requests } from "../../../http";

export default function Banner() {
  const [banner, setbanner] = useState([]);
  // lấy bannner ngẫu nhiên
  useEffect(() => {
    fetchApi(requests.fetchNetflixOriginals).then((data) =>
      setbanner(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      )
    );
  }, []);

  return (
    <div
      className={classes.banner}
      style={{
        background: `url( https://image.tmdb.org/t/p/original/${banner.backdrop_path}) center center/cover no-repeat`,
      }}
    >
      <div className={classes.summary}>
        <h2>{banner.name}</h2>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{banner.overview}</p>
      </div>
    </div>
  );
}
