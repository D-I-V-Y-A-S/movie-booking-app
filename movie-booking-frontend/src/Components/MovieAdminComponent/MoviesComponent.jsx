import React, { useState } from 'react'
import './MovieAdminComponent.css'

const MoviesComponent = ({movie}) => {  

    return (
        <div className='card'>
        <div className="text-container">
        <h3>{movie.movieName}</h3>
        <img src={movie.movieImage} alt="movie-pic" width="270px" height="200px"/>
        <p className='status'> <span style={{color:"skyblue"}}>GENRE: </span>{movie.movieGenre1}, {movie.movieGenre2}</p>
        <p className='status'><span style={{color:"skyblue"}}>Released on: </span>{movie.releaseDate}</p>
        <p className='status'><span style={{color:"skyblue"}}>THEATRE NAME: </span>{movie.theatreName}</p>
        <p className='status'><span style={{color:"skyblue"}}>imdb rating: </span>{movie.imdbRating}</p>
        <p className='status'><span style={{color:"skyblue"}}>Available seats:</span><span style={{color:"green"}}> {movie.availability}</span></p>
        </div>
      </div>

      )
}

export default MoviesComponent