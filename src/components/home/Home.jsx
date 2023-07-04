import "./Home.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom"
import MovieList from "../MovieList/MovieList";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
          <div className="poster_image">
            <img
              src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
              alt="l"
            />
          </div>
          <div className="poster_image_overlay">
            <div className="poster_title">{movie ? movie.original_title : " "}</div>
            <div className="poster_description">{movie ? movie.overview : " "}</div>
          </div>
          </Link>
        ))}
      </Carousel>
      <MovieList/>
    </div>
  );
};

export default Home;
