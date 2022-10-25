const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes')

//Set routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`The app is listen on http://localhost:${PORT}`)
})