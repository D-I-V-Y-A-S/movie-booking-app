const express = require('express')
const router = express.Router()
const {matchMovies} = require('../controllers/matchMoviesController')

router.route('/:filter').get(matchMovies)

module.exports = router

