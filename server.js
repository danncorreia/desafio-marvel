var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    console.log(__dirname);
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.use(express.static(__dirname)); 
app.listen(process.env.PORT || 3000);
console.log(process.env.PORT || 3000)