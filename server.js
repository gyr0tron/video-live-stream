const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'video/webm'})
  var rs = fs.createReadStream('assets/video3.mkv');
  rs.pipe(res);
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});