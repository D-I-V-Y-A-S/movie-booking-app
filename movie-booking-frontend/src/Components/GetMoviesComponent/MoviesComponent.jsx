import React, { useState } from 'react'
import './GetMoviesComponent.css'
import axios from 'axios';
import BookingComponent from '../BookingComponent/BookingComponent';

const MoviesComponent = ({ movie }) => {
  const [booking,setBooking]=useState(false)
  const clickHandler = () => {
    axios.post(`http://localhost:3500/api/v1/avail/${movie.movieName}/${movie.availability}`)
      .then(response => 
      {
        if (response.status === 200)
        {
          alert(response.data.message)
          setBooking(true)
          window.location.href = '/moviespage'
        }
      })
      .catch(error => alert(error.response.data.message));
  }

  return (

    <div className='card'>
      <div className="text-container">
        <h3>{movie.movieName}</h3>
        <img src={movie.movieImage} alt="movie-pic" width="270px" height="200px" />
        <p className='status'> <span style={{ color: "skyblue" }}>GENRE: </span>{movie.movieGenre1}, {movie.movieGenre2}</p>
        <p className='status'><span style={{ color: "skyblue" }}>Released on: </span>{movie.releaseDate}</p>
        <p className='status'><span style={{ color: "skyblue" }}>THEATRE NAME: </span>{movie.theatreName}</p>
        <p className='status'><span style={{ color: "skyblue" }}>imdb rating: </span>{movie.imdbRating}</p>
        <p className='status'><span style={{ color: "skyblue" }}>Available seats:</span><span style={{ color: "green" }}> {movie.availability}</span></p>
        {movie.ticketsBooked>0 && 
        <p style={{color:"orangered"}}>Tickets Booked:  <span style={{backgroundColor:"palegreen",padding:"1% 2%",borderRadius:"5px"}}>{movie.ticketsBooked}</span>
        </p>}
        <button type="submit" onClick={clickHandler}  disabled={movie.availability === 0}>BOOK TICKET</button>
      </div>
      {booking && <BookingComponent/>}
    </div>

  )
}

export default MoviesComponent