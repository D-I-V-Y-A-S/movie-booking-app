const moviesModel = require('../Models/movieModel')

const matchMovies = async (request, response) => {
    try {
        const filter = request.params.filter
        const regex = new RegExp(filter, 'i')
        const moviesMatched = await moviesModel.find({
            $or:[
                { movieName:regex },{theatreName:regex},{releaseDate:regex}
            ]
        })
        response.status(200).json(moviesMatched)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = { matchMovies }