const express = require('express')
const router = express.Router()

const {getImage}=require('../controllers/imageController')
const {displayMoviesData}=require('../controllers/userDataController')

router.get('/',displayMoviesData)
router.get('/image/:fileName', getImage)

module.exports=router