const express = require('express')
const ShortURL = require('../../models/shortURL.js')
const router = express.Router()
router.route('/')
  .get((req, res) => {
    ShortURL.find()
    .lean()
    .sort({ 'clicked': 'desc'})
    .then(shortURLs => {res.render('url_list', {shortURLs})})
    .catch(error => console.log(error))
  })
  .post((req, res) => {
    res.send('Create new shortURLs.')
  })
router.route('/:url_id')
  .delete((req, res) => {
    const id = req.params.url_id
    res.send(`Delete the shortURLs. ${id}`)
  })
module.exports = router