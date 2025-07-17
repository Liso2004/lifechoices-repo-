// db.js
const mysql = require('mysql2');

// Create connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'liso1707',
  database: 'shopleft_database'
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Error connecting to database:', err);
    return;
  }
  console.log('✅ Connected to shopleft_database');
  connection.release();
});

module.exports = db;
