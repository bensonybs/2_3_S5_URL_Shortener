const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000
const routes = require('./routes')

// Set mongoose
require('./config/mongoose.js')
// Set method override
app.use(methodOverride('_method'))
// Set view engine
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
// Set body parser
app.use(express.urlencoded({ extended: true}))
// Set static file
app.use(express.static('public'))
// Set routes
app.use(routes)
// Set 404 page
app.use((req, res) => {
  res.status(404).send('The Page or Short URL is not found!')
})
app.listen(PORT, () => {
  console.log(`The app is listen on http://localhost:${PORT}`)
})