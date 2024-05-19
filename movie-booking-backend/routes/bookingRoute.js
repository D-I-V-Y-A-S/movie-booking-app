const express = require('express')
const router = express.Router()
const {bookTicket} = require('../controllers/bookingController')

router.route('/:name/:available').post(bookTicket)

module.exports = router

