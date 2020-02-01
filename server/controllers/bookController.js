// const mysql = require('mysql') 
// const pool = require('../sql/connection')
// const { handleSQLError } = require('../sql/error')

// const getBooks = (req, res) => {
//   pool.query("SELECT * FROM books", (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows); 
  
// })
// }

// const addBook = (req, res) => {
  
//   const { name, image } = req.body
//   alert("hi "+name)
//   alert("hi "+image)
//   let sql = "INSERT INTO books (name, image) VALUES (?, ?)"
//   sql = mysql.format(sql, [ name, image ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }


// /*const updateBooksById = (req, res) => {
//   const { name, image } = req.body
//   let sql = "UPDATE books SET name = ?, image= ? WHERE id = ?"
//   sql = mysql.format(sql, [ name, image, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }*/
// /*const updatebooks = (req, res) => {
//   const { name ,newname } = req.body
//   let sql = "UPDATE books SET name = ? WHERE name = ?"
//   sql = mysql.format(sql, [ newname,name ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }*/


// const deleteBookByName = (req, res) => {
//   let sql = "DELETE FROM books WHERE name = ?"
//   sql = mysql.format(sql, [ req.params.name ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} book(s)` });
//   })
// }
// module.exports = {
//   getBooks,
//   addBook,
//   //updatebooks ,
//   deleteBookByName
// };
