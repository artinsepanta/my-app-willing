const mysql = require('mysql') 
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getBooks = (req, res) => {
  pool.query("SELECT * FROM books", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows); 
  
})
}

const addBook = (req, res) => {
  
  const { name, image } = req.body
  alert("hi "+name)
  alert("hi "+image)
  let sql = "INSERT INTO books (name, image) VALUES (?, ?)"
  sql = mysql.format(sql, [ name, image ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}


/*const updateBooksById = (req, res) => {
  const { name, image } = req.body
  let sql = "UPDATE books SET name = ?, image= ? WHERE id = ?"
  sql = mysql.format(sql, [ name, image, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}*/
/*const updatebooks = (req, res) => {
  const { name ,newname } = req.body
  let sql = "UPDATE books SET name = ? WHERE name = ?"
  sql = mysql.format(sql, [ newname,name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}*/


const deleteBookByName = (req, res) => {
  let sql = "DELETE FROM books WHERE name = ?"
  sql = mysql.format(sql, [ req.params.name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} book(s)` });
  })
}
module.exports = {
  getBooks,
  addBook,
  //updatebooks ,
  deleteBookByName
};


//**** */
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const connection = mysql.createPool({
//         host: '35.222.193.131:3306',
//         user: 'admin',
//         password: 'Idean@2009',
//         database: 'db_my_app_willing'
// });


// Starting our app.
// const app = express();

// app.get("/api/books", getBooks);
// app.post("/api/books", addBook);
// app.put("/api/books/:name", updateBook);


// // Creating a GET route that returns data from the 'books' table.
// app.get('/api/books', function (req, res) {
//     // Connecting to the database.
//     connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'books' table).
//     connection.query('SELECT * FROM books', function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//   });
// });
// app.post('/api/addBook', function (req, res) {
//     // Connecting to the database.
// 	const { name, image } = req.body
//   let sql = "INSERT INTO books (name, image) VALUES (?, ?)"
//   sql = mysql.format(sql, [ name, image ])
//     connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'books' table).
//     connection.query(sql, function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//   });
// });
// // Starting our server.
// app.listen(4000, () => {
//  console.log('Go to http://localhost:4000/api/books so you can see the data.');
// });