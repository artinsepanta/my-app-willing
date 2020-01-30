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
  let sql = "INSERT INTO books (name, image) VALUES (?, ?)"
  sql = mysql.format(sql, [ name, image ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}


const updateBookById = (req, res) => {
  const { name, image } = req.body
  let sql = "UPDATE books SET name = ?, image= ? WHERE id = ?"
  sql = mysql.format(sql, [ name, image, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

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
  updateBook,
deleteBook
};

//88 app.post('/',(req, res) => {
//   let data = {name: req.body.name, phone: req.body.phone, email: req.body.email, job: req.body.job, company: req.body.company, age: req.body.age, city: req.body.city};
//   let sql = "INSERT INTO user SET ?";
//   let query = connection.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
//88 });


// const getBooks = (req, res) => {
//   res.json(books);
// };

// const addBook = (req, res) => {
//   const { name, image } = req.body;
//   if (!name || !image) {
//     return res.status(417).json("Name and image are required");
//   }
//   books.push({ name, image: image });
//   res.json(books);
// };

// const updateBook = (req, res) => {
//   const { name } = req.params;
//   const selectedElement = books.find(book => book.name === name);
//   selectedElement.name = req.body.name;
//   res.json(books);
// };

// module.exports = {
//   getBooks,
//   addBook,
//   updateBook
// };
