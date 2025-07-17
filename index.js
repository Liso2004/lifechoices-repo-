// queries.js
const db = require('./db'); // import the connection from db.js

// ✅ Function: Get all users
function getAllUsers() {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('❌ Error fetching users:', err);
      return;
    }
    console.log('📌 Users table:');
    console.log(results);
  });
}

// ✅ Function: Get all products
function getAllProducts() {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('❌ Error fetching products:', err);
      return;
    }
    console.log('📌 Products table:');
    console.log(results);
  });
}

// ✅ Function: Delete a product by product_name
function deleteProduct(productName) {
  const sql = 'DELETE FROM products WHERE product_name = ?';
  db.query(sql, [productName], (err, result) => {
    if (err) {
      console.error('❌ Error deleting product:', err);
      return;
    }
    console.log(`🗑️ Deleted ${result.affectedRows} product(s) with name: ${productName}`);
  });
}

// ✅ Function: Insert a new product
function insertProduct(code, name, price, quantity) {
  const sql = 'INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)';
  db.query(sql, [code, name, price, quantity], (err, result) => {
    if (err) {
      console.error('❌ Error inserting product:', err);
      return;
    }
    console.log(`✅ Product inserted: ${name}`);
  });
}

// ✅ Function: Update an existing product
function updateProduct(productName, newPrice, newQuantity) {
  const sql = 'UPDATE products SET product_price = ?, product_quantity = ? WHERE product_name = ?';
  db.query(sql, [newPrice, newQuantity, productName], (err, result) => {
    if (err) {
      console.error('❌ Error updating product:', err);
      return;
    }
    console.log(`✏️ Updated ${result.affectedRows} product(s): ${productName}`);
  });
}

// testiing 

// getAllUsers();
// getAllProducts();
// deleteProduct('baro');
// insertProduct('F001', 'Pizza', 120.50, 15);
// updateProduct('Pizza', 150.00, 20);
