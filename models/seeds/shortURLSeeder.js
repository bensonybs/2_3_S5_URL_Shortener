const db = require('../../config/mongoose.js')
const ShortURL = require('../shortURL.js')
const seedData = [
  { url: 'https://www.google.com/', url_id: 'googl', description: 'Google(seed data)' },
  { url: 'https://www.facebook.com/', url_id: 'fbook', description: 'Facebook(seed data)' },
  { url: 'https://lighthouse.alphacamp.co/', url_id: 'light', description: 'Lighthouse ALPHAcamp(seed data)' },
  { url: 'https://expressjs.com/', url_id: 'expss', description: 'Express.js(seed data)' }
]

db.once('open', () => {
  ShortURL.insertMany(seedData).then(console.log('Insert seed data!'))
})
