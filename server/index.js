 const express = require("express");
 const bodyParser = require("body-parser");
 const booksRouter = require('../routers/books');
 //const booksController = require("./controllers/booksController");

 const app = express();
 const port = process.env.PORT || 3306;

 app.use(bodyParser.json())
 app.use(express.json());
 app.use('/books', booksRouter)
 app.use(express.static('public'));

 app.get('/', (req, res) => {
  res.send('Welcome to our server!')
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });   console.log("welcome")

