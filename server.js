const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(__dirname + '/dist/assignment'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/assignment/index.html'));
});

app.listen(PORT, (error) => {
    console.log(`😎 Server is listening on port ${PORT}`);
  });