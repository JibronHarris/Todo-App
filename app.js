const express = require('express')
const app = express()
const index = require("./");
const path = require("path");

const port = 3000;

//makes it so express serves images, CSS files, and JavaScript files in a directory named public
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(index());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})