import axios from 'axios';
import React, { useState } from 'react'
import './AddMovieComponent.css'

const AddMovieComponent = () => {
    const [movieInfo, setMovieInfo] = useState({
        movieId: '',
        movieName: '',
        releaseDate: '',
        movieGenre1: '',
        movieGenre2: '',
        imdbRating: '',
        movieImage: '',
        theatreName: ''
    });

    const inputHandler = (event) => {
        const { name, value } = event.target
        setMovieInfo({ ...movieInfo, [name]: value })
        console.log(movieInfo)
    }
    const imageHandler = (event) => {
        const file = event.target.files[0]
        setMovieInfo({ ...movieInfo, movieImage: event.target.files[0] })
        console.log(event.target.files[0])
        console.log(file.name)
    }

    const { movieId, movieName, releaseDate, movieGenre1, movieGenre2, imdbRating, movieImage, theatreName } = movieInfo;

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        console.log(movieGenre1)
        const formData = new FormData()
        formData.append('movieId', movieId)
        formData.append('movieName', movieName)
        formData.append('releaseDate', releaseDate)
        formData.append('movieGenre1', movieGenre1)
        formData.append('movieGenre2', movieGenre2)
        formData.append('imdbRating', imdbRating)
        formData.append('theatreName', theatreName)
        formData.append('movieImage', movieImage)
        console.log(formData)

        await axios.post('http://localhost:3500/api/v1/movies/add', formData)
            .then(response => {
                alert(JSON.stringify(response.data.message))
                window.location.href = '/moviesadmin'
            }
            )
            .catch(error => alert(JSON.stringify(error.response.data)))
    }

    return (
        <form className='form-container' onSubmit={formSubmitHandler}>
            <h2>Adding a new movie</h2>

            <div className='form-group'>
                <label>Movie ID</label>
                <input
                    type='Number'
                    name="movieId"
                    placeholder='Enter the movie ID'
                    value={movieId}
                    onChange={inputHandler}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Movie Name</label>
                <input
                    type='text'
                    name="movieName"
                    placeholder='Enter the movie name'
                    value={movieName}
                    onChange={inputHandler}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Release Year</label>
                <input
                    type='text'
                    name="releaseDate"
                    placeholder='Enter the release Year of the movie'
                    value={releaseDate}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>movieGenre1</label>
                <select
                    type='text'
                    name="movieGenre1"
                    placeholder='Enter the genre1'
                    value={movieGenre1}
                    onChange={inputHandler}
                    required>
                    <option value="">--select--</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="SciFi">SciFi</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Animation">Animation</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Crime">Crime</option>
                    <option value="Biography">Biography</option>
                </select>
            </div>
            <div className='form-group'>
                <label>movieGenre2</label>
                <select
                    type='text'
                    name="movieGenre2"
                    placeholder='Enter the genre2'
                    value={movieGenre2}
                    onChange={inputHandler}
                    required>
                    <option value="">--select--</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="SciFi">SciFi</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Animation">Animation</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Crime">Crime</option>
                    <option value="Biography">Biography</option>
                    <option value="War">War</option>
                </select>
            </div>

            <div className='form-group'>
                <label>Imdb Rating</label>
                <input
                    type='text'
                    name="imdbRating"
                    placeholder='Enter the ISBN Number'
                    value={imdbRating}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Theatre Name</label>
                <input
                    type='text'
                    name="theatreName"
                    className='form-control'
                    placeholder='Enter the theatre name'
                    value={theatreName}
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>MOVIE IMAGE</label>
                <input
                    type='file'
                    onChange={imageHandler}
                    required
                />
            </div>

            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
}

export default AddMovieComponent