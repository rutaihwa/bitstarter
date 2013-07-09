var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var reader;
var test;
fs.readFile('index.html', function (err, data)
{
    if (err)
    {
	throw err;
	console.log("Could not read\n");
    }
    //console.log (data);
    test = data.write('utf-8');
    reader = test.toString();
});


app.get('/', function(request, response) {
  response.send(reader);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
