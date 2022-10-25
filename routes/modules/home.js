const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('index')
  })
router.route('/:url_id')
  .get((req, res) => {
    const id = req.params.url_id
    res.send(`Redirect with ${id}`)
  })


module.exports = router