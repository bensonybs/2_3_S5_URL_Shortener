const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error', () => {
  console.log('Mongo connect error!')
})
db.once('open', () => {
  console.log('Mongo connected!');
})

module.exports = db