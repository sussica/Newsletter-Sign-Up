const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
const port = 3000

app.listen(port, () => console.log('Server is running on port 3000'))
