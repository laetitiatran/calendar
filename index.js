const express = require('express')

const port= 3000

const app = express()

app.use(
  '/client',
  express.static( __dirname + './public'))

app.listen(port,() => {
  console.log((`Listening on ${port}`));
})
