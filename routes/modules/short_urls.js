const express = require('express')
const ShortURL = require('../../models/shortURL.js')
const utility = require('../../utility')
const router = express.Router()
router.route('/')
  .get((req, res) => {
    ShortURL.find()
      .lean()
      .sort({ 'clicked': 'desc' })
      .then(shortURLs => { res.render('url_list', { shortURLs }) })
      .catch(error => console.log(error))
  })
  .post((req, res) => {
    //Check if the URL existed and return it or create new one
    const url = req.body.url
    ShortURL.findOne({ url })
      .lean()
      .then(shorturl => {
        let replyMsg = ''
        if (shorturl) {
          // Old short URL exist, return original one
          console.log('User post a existed URL.')
          console.log(shorturl)
          replyMsg = 'The URL is already existed.'
        } else {
          // Create new short URL
          const urlId = utility.generateShortURLId()
          shorturl = {
            url: url,
            url_id: urlId,
          }
          console.log('User create a new short URL.')
          replyMsg = 'Shorten the URL Successfully.'
          ShortURL.create(shorturl)
        }
        const showForm = false
        return res.render('index', { shorturl, replyMsg, showForm })
      })
      .catch(error => console.log(error))
  })
router.route('/:url_id')
  .delete((req, res) => {
    const id = req.params.url_id
    ShortURL.findOne({ url_id: id })
      .then(shorturl => {
        return shorturl.delete()
      })
      .then(() => {
        console.log('User delete short URL.')
        return res.redirect('/short_urls')
      })
  })
module.exports = router