const express = require('express')
const ShortURL = require('../../models/shortURL.js')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('index')
  })
router.route('/:url_id')
  .get((req, res, next) => {
    const id = req.params.url_id
    ShortURL.findOne({ 'url_id': id })
      .then(shorturl => {
        if (shorturl) {
          shorturl.clicked ++
          shorturl.save()
          return res.redirect(shorturl.url)
        }
        next()
      })
      .catch(error => console.log(error))
  })


module.exports = router