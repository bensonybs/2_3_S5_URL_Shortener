const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const routes = require('./routes')

//Set view engine
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
//Set body parser
app.use(express.urlencoded({ extended: true}))
//Set routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`The app is listen on http://localhost:${PORT}`)
})