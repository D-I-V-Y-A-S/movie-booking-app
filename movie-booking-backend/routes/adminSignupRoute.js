const express = require('express')
const router = express.Router()
const {registerNewUser} = require('../controllers/adminSignup')

router.route('/').post(registerNewUser)

module.exports = router