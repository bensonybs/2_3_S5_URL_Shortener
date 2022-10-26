const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortURLSchema = new Schema({
  url: { type: String, require: true },
  url_id: { type: String },
  clicked: { type: Number, default: 0 },
  description: { type: String }
})

module.exports = mongoose.model('shortURL', shortURLSchema)