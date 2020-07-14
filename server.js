const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/assignment'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/assignment/index.html'));
});

app.listen(process.env.PORT || 5000);