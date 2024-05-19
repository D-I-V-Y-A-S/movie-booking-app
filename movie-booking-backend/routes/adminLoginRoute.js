const express = require('express')
const router = express.Router()
const {loginExistingUser} = require('../controllers/adminLogin')

router.route('/').post(loginExistingUser)

module.exports = router

