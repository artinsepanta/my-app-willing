 const express = require("express");
 const bodyParser = require("body-parser");
 const booksRouter = require('./router/books');
 const bookController = require("./controllers/bookController");

 const app = express();
 const port = process.env.PORT || 4000 ;   //3306  
 app.use(bodyParser.json())
 app.use(express.json());
app.use(express.static('public'));

  app.use ("/api/books", require("./router/books"))

 app.use('/api/books', (req, res) => {
  res.send('Welcome to our server!')
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });   console.log("welcome")

