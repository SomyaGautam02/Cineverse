import React,{useEffect, useState} from 'react'
import "./Card.css"

const Card = () => {
    const [popularMovies, setPopularMovies]=useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
  }, [])
  return (
    <div className="movies_card">
      {console.log(popularMovies)}
      {popularMovies.map(mo=>(
        <div className="movie_cards">       
        <img src={`https://image.tmdb.org/t/p/original${mo&&mo.poster_path}`} alt='l'/>
          <div className='text'> {mo.original_title} </div>
        </div>
      ))}
     
    </div>
  )
}

export default Card;