import React from "react";
import Navbar from "../browse/Header/Navbar";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import MovieDetail from "../browse/MovieList/MovieDetail";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setRuslts] = useState({});
  function handleSearch(e) {
    setSearch(e);
  }

  // lấy thông tin phim truyền key search vào
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTYzNjc4N2NkZTM5YmU2ZDIzMTQ1MTlhNjY1MTAyNiIsIm5iZiI6MTcyMDYwMTYwNC40NjcxNiwic3ViIjoiNjY4NjlmMTdkNjRhMjEwNDY5MzM0OGQzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.X35O-no5RxtTG-oac6ockWLxAu--X04gAIKt0XIWjrg",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRuslts(response.results))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="app">
      <Navbar></Navbar>
      <SearchForm onSearch={handleSearch} />

      {results.length > 0 ? <ResultList dataMovie={results} /> : ""}
    </div>
  );
};

export default Search;
