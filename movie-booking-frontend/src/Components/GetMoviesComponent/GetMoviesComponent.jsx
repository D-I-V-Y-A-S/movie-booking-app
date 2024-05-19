import React, { useEffect, useState } from 'react'
import MoviesComponent from './MoviesComponent'
import axios from 'axios'
import './GetMoviesComponent.css'

const GetMoviesComponent = () => {

    const [findMovie, setFindMovie] = useState('')
    const [movie, setmovie] = useState([])
    const [filteredMovies,setfilteredMovies]=useState([])

    useEffect(() => {
        axios.get('http://localhost:3500/api/v1/movie')
            .then(response => setmovie(response.data))
            .catch(error => console.log(error.response.data.message));
    }, [])

    const handleInput = async(event) => {
        const { value } = event.target
       setFindMovie(value)
     await axios.get(`http://localhost:3500/api/v1/find/${findMovie}`)
        .then(response=>{
            setfilteredMovies(response.data)
        })
        .catch(error => console.log(error.response.data.message))
    }

    return (
        <React.Fragment>
            <div className="center-container">

                <h3 style={{ color: "white", fontWeight: "700", marginLeft: "25%" }}>MOVIES</h3>
                <input
                    style={{ marginLeft: "19%", width: "370px", padding: "1%", borderRadius: "20px", backgroundColor: "black", color: "white", outline: "none", border: "1px white solid" }}
                    placeholder="Filter Movies..."
                    type="text"
                    value={findMovie}
                    onChange={handleInput}/>
            </div>
            <div className='books'>
            {findMovie && filteredMovies.length > 0
                    ? filteredMovies.map((movie, index) => (
                        <MoviesComponent movie={movie} key={index} />
                    ))
                    : movie.map((movie, index) => (
                        <MoviesComponent movie={movie} key={index} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default GetMoviesComponent
