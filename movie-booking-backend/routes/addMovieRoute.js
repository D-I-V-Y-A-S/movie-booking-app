const express = require('express')
const router = express.Router()

const {addMovie} = require('../controllers/addMovie')

const upload=require('../middleware/multer')

router.route('/').post(upload.single('movieImage'),addMovie)

module.exports = router

