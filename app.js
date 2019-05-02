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

app.post('/', function(req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password;
  console.log(firstname + lastname + email + password);

  var data = {
    members: [{
      "email_address": email,
      "status": "subscribed",
      "merge_fields": {
        "FNAME": firstname,
        "LNAME": lastname
      },
    }]
  }

  var jsonData = JSON.stringify(data);

  var options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/',
    method: "POST",
    headers: {
      "Authorization": 'Scarlett '
    },
    body: jsonData
  }


  request(options, function(error, response, body) {
    if (error) {
      res.sendFile(__dirname + '/failure.html');
    } else if (response.statusCode == 200) {
      res.sendFile(__dirname + '/success.html');
    } else {
      res.sendFile(__dirname + '/failure.html');
    }
  });

  app.post('/failure', function(req, res) {
    res.redirect("/");
  });

});
