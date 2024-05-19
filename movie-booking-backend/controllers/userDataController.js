const userModel = require('../Models/userModel')
const moviesModel = require('../Models/movieModel')
const moviesData = require('../Data/moviesData')

const displayMoviesData = async (request, response) => {
    try {
        const movies = await moviesModel.find().sort({ movieId:1 })
        if (movies.length === 0) {
            const pushMovies = await moviesModel.insertMany(moviesData)
            response.status(201).json(moviesData)
        }
        else {
            response.status(201).json(movies)
        }
    }
    catch (error) {
    response.status(500).json({ message: error.message })
}
}

module.exports = { displayMoviesData }

//process
//once token gets verified data are displayed, because data should be shown to respective user.