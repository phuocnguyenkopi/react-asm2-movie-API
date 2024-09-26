import { useEffect, useState } from "react";
import classes from "./MovieDetail.module.css";
import { fetchApiTraile } from "../../../http";
import YouTube from "react-youtube";
export default function MovieDetail({ movieData }) {
  const [youtube, setYoutube] = useState();
  const url = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`;
  //
  // lấy video youtube của phim
  useEffect(() => {
    async function getMovies() {
      fetchApiTraile(movieData.id).then((data) => {
        const results = [];
        try {
          data.results.forEach((e) => {
            if (e.type === "Teaser" || e.type === "Trailer") {
              results.push(e);
            }
          });
        } catch (error) {}
        setYoutube(results[0]);
      });
    }
    getMovies();
  }, [movieData]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className={classes["movie-detail"]}>
        <div className={classes.right}>
          <h2>{movieData.name ?? movieData.original_title}</h2>
          <div className={classes.summary}>
            <p>Release Date: {movieData.release_date}</p>
            <p>Vote: {movieData.vote_average}/10</p>
          </div>
          <div className={classes.overview}>
            <p>{movieData.overview}</p>
          </div>
        </div>
        <div className={classes.left}>
          {youtube ? (
            <YouTube videoId={youtube.key} opts={opts} />
          ) : (
            <img src={url} alt="" />
          )}
        </div>
      </div>
    </>
  );
}
