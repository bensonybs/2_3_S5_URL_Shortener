const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.send('List All URLs.')
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