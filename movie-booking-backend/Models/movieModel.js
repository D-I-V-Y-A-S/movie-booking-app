const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true,
        unique: true
    },
    movieName: {
        type: String,
        required: true
    }, releaseDate: {
        type: String,
        required: true
    }, movieGenre1: {
        type: String,
        required: true,
        enum: ['Action', 'Comedy', 'Drama', 'SciFi', 'Horror', 'Thriller', 'Romance', 'Fantasy', 'Animation', 'Adventure', 'Crime', 'Biography']
    }, movieGenre2: {
        type: String,
        required: true,
        enum: ['Action', 'War', 'Comedy', 'Drama', 'SciFi', 'Horror', 'Thriller', 'Romance', 'Fantasy', 'Animation', 'Adventure', 'Crime', 'Biography']
    }, imdbRating: {
        type: Number,
        required: true
    }, movieImage: {
        type: String,
        required: true
    },
    theatreName: {
        type: String,
        required: true
    }, availability: {
        type: Number,
        default: 60,
        required: true
    },ticketsBooked:{
        default:0,
        type:Number,
        required:true
    }
}, { collection: 'movieBooks' })

module.exports = mongoose.model('movieBooks', movieSchema)

