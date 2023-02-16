const express = require('express');
const app = express();
const path = require('path');


app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});
