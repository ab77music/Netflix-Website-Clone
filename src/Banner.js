import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import request from "./request"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(request.fetchNetflixOriginals);
      // console.log(result.data.results);
      setMovie(result?.data.results[
        Math.floor(Math.random() * result.data.results.length)
      ]
      );
      return result;
    }
    fetchData();
  }, []);

  // console.log(movie)
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
export default Banner;
