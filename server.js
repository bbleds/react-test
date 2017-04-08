var express = require('express');

// create app
var app = express();

app.use(express.static('public'));

app.listen(3001, function(){
  console.log('express listening on port 3001');
});
