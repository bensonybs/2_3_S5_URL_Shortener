// const ShortURL = require('../models/shortURL.js')
// require('../config/mongoose')

// No use yet
function getURLObject(condition) {
  ShortURL.findOne(condition)
    .then(shortURL => {
      if (shortURL) {
        console.log('Exist')
        return shortURL
      }
      console.log('Not Exist')
      return
    }).catch(error => console.log(error))
}

function generateShortURLId(size = 5) {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const id = []
  for (i = 0; i < size; i++) {
    const randomNum = Math.floor(Math.random() * characters.length)
    id.push(characters[randomNum])
  }
  return id.join('')
}

module.exports = { generateShortURLId }




