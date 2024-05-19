const express = require('express')
const router = express.Router()
const {viewUserBookings} = require('../controllers/viewBookings')

router.route('/').post(viewUserBookings)

module.exports = router