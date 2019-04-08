const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/lit-html/'));

app.listen(8020, function () {
  console.log('web server listening on port 8020')
});
