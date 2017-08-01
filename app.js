var express = require('express');

var app = express();

var port = 3000;

// adding public folder to app.js
app.use(express.static('public'))

// app.get('/', function (req, res) {
//     res.send('Testing');
// })

app.listen(port, function() {
    console.log('Listening to port', port);  
})