import { useEffect, useState } from "react";
import classes from "./ResultList.module.css";
import MovieDetail from "../browse/MovieList/MovieDetail";

export default function ResultList({ dataMovie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // xu ly nhap chuot
  const handleItemMovie = (item) => {
    if (selectedMovie === item) {
      setSelectedMovie();
    } else {
      setSelectedMovie(item);
    }
  };
  return (
    <>
      <section className={classes["result-list"]}>
        {selectedMovie && <MovieDetail movieData={selectedMovie} />}
        <div className={classes.container}>
          {dataMovie.map((e) => {
            const url = `https://image.tmdb.org/t/p/original/${e.poster_path}`;
            return (
              <div
                key={e.id}
                onClick={() => {
                  handleItemMovie(e);
                }}
                className={classes.item}
              >
                <img src={url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
