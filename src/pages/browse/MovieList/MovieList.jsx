import { useEffect, useState } from "react";
import { fetchApi } from "../../../http";
import classes from "./MovieList.module.css";
import MovieDetail from "./MovieDetail";

export default function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // lấy dự liệu từ API
  useEffect(() => {
    async function test() {
      try {
        fetchApi(props.url).then((data) => setMovies(data.results));
      } catch (error) {
        setError(`lỗi try cập dữ liệu: ${error.message}`); // Sử dụng template string cho thông báo lỗi
      }
    }
    test();
  }, [props.url]);

  // xữ lý sk nhấp chuột lấy thông tin bộ phim
  const handleItemMovie = (item) => {
    if (selectedMovie === item) {
      setSelectedMovie("");
    } else {
      setSelectedMovie(item);
    }
  };

  return (
    <>
      <section className={classes["movies-list"]}>
        <h2>{props.title}</h2>
        <div className={classes["scroll-container"]}>
          <div className={classes["scroll-content"]}>
            {movies.map((item) => {
              let url =
                props.title === ""
                  ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                  : `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;

              return (
                <div
                  onClick={() => {
                    handleItemMovie(item);
                  }}
                  key={item.id}
                  className={classes.item}
                >
                  <img src={url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        {selectedMovie && <MovieDetail movieData={selectedMovie} />}
      </section>
    </>
  );
}
