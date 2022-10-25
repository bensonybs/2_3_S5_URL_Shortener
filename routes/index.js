const express = require('express')
const router = express.Router()
const home = require('./modules/home.js')

//Set router
router.use('/', home)

module.exports = router