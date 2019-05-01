const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))
const port = 3000

app.use(express.static("local"))

app.listen(port, () => console.log('Server is running on port 3000'))


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/signup.html')
})
