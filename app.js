const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const routes = require('./routes')

//Set mongoose
require('./config/mongoose.js')
//Set view engine
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
//Set body parser
app.use(express.urlencoded({ extended: true}))
//Set routes
app.use(routes)
//Set 404 page
app.use((req, res) => {
  res.status(404).send('The Page or Short URL is not found!')
})
app.listen(PORT, () => {
  console.log(`The app is listen on http://localhost:${PORT}`)
})