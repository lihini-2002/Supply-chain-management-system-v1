const express = require('express');
const mysql = require('mysql2');
const app = express();

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'university'
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
app.post('/products', (req, res) => {
  db.query('SELECT * FROM classroom', (err, results) => {
    console.log("Got request");
    if (err) throw err;
    res.json(results);
  });
});

// Start server
app.listen(3001, () => {
  console.log('Server started on port 3000');
});
//test_one