const express = require('express');
const mysql = require('mysql2');
const app = express();

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'scms-1'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Fetch products
app.get('/products', (req, res) => {
  console.log("Got request");
  // db.query('SELECT * FROM classroom', (err, results) => {
  //   if (err) throw err;
  //   res.json(results);
  // });
  res.json("test");
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
//test_one