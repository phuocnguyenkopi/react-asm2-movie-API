import React, { useEffect, useState } from "react";

import Navbar from "./Header/Navbar";
import Banner from "./Header/Banner";
import MovieList from "./MovieList/MovieList";
import { requests } from "../../http";

function Browse() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MovieList title={""} url={requests.fetchNetflixOriginals} />
      <MovieList title={"Xu Hướng"} url={requests.fetchTrending} />
      <MovieList title={"Xếp hạng cao"} url={requests.fetchTopRated} />
      <MovieList title={"Hành động"} url={requests.fetchActionMovies} />
      <MovieList title={"Hài"} url={requests.fetchComedyMovies} />
      <MovieList title={"Kinh dị"} url={requests.fetchHorrorMovies} />
      <MovieList title={"Lãng mạn"} url={requests.fetchRomanceMovies} />
      <MovieList title={"Tài liệu"} url={requests.fetchDocumentaries} />
    </div>
  );
}

export default Browse;
