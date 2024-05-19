const moviesModel = require('../Models/movieModel')

const addMovie = async (request, response) => {
    try {
        console.log(request.body)
        const { movieId, movieName, releaseDate, movieGenre1, movieGenre2, imdbRating,theatreName } = request.body
        const existingmovie = await moviesModel.findOne({ movieId: movieId })
        if (existingmovie) {
            return response.status(400).send({ message: 'movie already exists' })
        }
        const { filename } = request.file
        const movieImage = 'http://localhost:3500/api/v1/movie/image/' + filename
        const movieData =
        {
            movieId:movieId,
             movieName:movieName, 
             releaseDate:releaseDate,
              movieGenre1:movieGenre1,
               movieGenre2:movieGenre2,
             imdbRating:imdbRating, 
             movieImage:movieImage, 
             theatreName:theatreName
        }
        await moviesModel.create(movieData)
        // JSON.stringify(movieData)
        // console.log((movieData))
        response.status(201).send({ message: `${movieName} added successfully` })
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports={addMovie}