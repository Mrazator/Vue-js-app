const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 3001

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Vase jmeno: ${req.body.email}, heslo: ${req.body.password}`
  })
})

app.listen(port)
