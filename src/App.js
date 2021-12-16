import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=189bb2abf0f7626865f5f09fc5496378";
const IMG_API =  "https://image.tmdb.org/t/p/w1000";
const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&"


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

    return (
      <>
        <header>
          <input className="search" type="search" placeholder="Search..." />
        </header>
        <div className="movie-container">
          {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
      </>
    );
}

export default App;
