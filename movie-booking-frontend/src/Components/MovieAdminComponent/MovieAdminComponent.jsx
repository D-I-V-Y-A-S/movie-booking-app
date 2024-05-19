import React, { useEffect, useState } from 'react'
import MoviesComponent from './MoviesComponent'
import axios from 'axios'
import './MovieAdminComponent.css'
import AddMovieComponent from '../AddMovieComponent/AddMovieComponent'
import BookingComponent from '../BookingComponent/BookingComponent'

const MovieAdminComponent = () => {
    const [findMovie, setFindMovie] = useState('')
    const [movie, setmovie] = useState([])
    const [filteredMovies, setfilteredMovies] = useState([])
    const [add, setAdd] = useState(false)
    const [viewBookings, setViewBookings] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3500/api/v1/movie')
            .then(response => setmovie(response.data))
            .catch(error => console.log(error.response.data.message));
    }, [])

    const handleAddClick = () => {
        setAdd(true)
    }

    const handleInput = async (event) => {
        const { value } = event.target
        setFindMovie(value)
        await axios.get(`http://localhost:3500/api/v1/find/${findMovie}`)
            .then(response => {
                setfilteredMovies(response.data)
            })
            .catch(error => console.log(error.response.data.message))
    }

    const handleBookingClick = (event) => {
        setViewBookings(true)
    }

    return (
        <React.Fragment>
            <div className="center-container">

                <button
                    type="button"
                    style={{
                        width: "15%",
                        margin: " 0.3% 0% 0% 12% ",
                        padding: " 1% 2% 1% 2%",
                        backgroundColor: "palegreen"
                    }}
                    onClick={handleBookingClick}
                >
                    View Bookings
                </button>

                <h3 style={{ color: "white", fontWeight: "700", marginLeft: "15%", color: "orangered" }}>MOVIES</h3>

                <button
                    type="button"
                    style={{
                        margin: " 0.3% 0% 0% 9% ",
                        padding: " 1% 2% 1% 2%",
                        backgroundColor: "palegreen",
                        width:"12%"
                    }}
                    onClick={handleAddClick}
                >
                    Add Movie
                </button>

                <input
                    style={{ marginLeft: "6%", width: "370px", padding: "1%", borderRadius: "20px", backgroundColor: "black", color: "white", outline: "none", border: "1px white solid" }}
                    placeholder="Filter Movies..."
                    type="text"
                    value={findMovie}
                    onChange={handleInput} />
            </div>
            {viewBookings && <BookingComponent />}
            {add && <AddMovieComponent />}
               {!add && !viewBookings &&
                    <div className='books'>
                        {findMovie && filteredMovies.length > 0
                            ? filteredMovies.map((movie, index) => (
                                <MoviesComponent movie={movie} key={index} />
                            ))
                            : movie.map((movie, index) => (
                                <MoviesComponent movie={movie} key={index} />
                            ))}
                    </div>
            }
        </React.Fragment>
    )
}

export default MovieAdminComponent

