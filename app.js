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

app.post('/', function(req,res){
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password;
  console.log(firstname+lastname+email+password);
})
