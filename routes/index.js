const express = require('express')
const router = express.Router()
const home = require('./modules/home.js')
const short_urls = require('./modules/short_urls.js')
//Set router
router.use('/short_urls', short_urls)
router.use('/', home)

module.exports = router