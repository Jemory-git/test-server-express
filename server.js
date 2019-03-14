const express = require('express');
const app = express();

app.get('/', function (req, res,next) {
	// let deviceDetection = req.headers['user-agent'].match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i)
	req.url = '/index.html';
	next();
});
app.use(express.static('src'));

var server = app.listen(8000, '185.123.25.153', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

