CREATE DATABASE shopleft_database;
USE shopleft_database;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  product_code VARCHAR(40) PRIMARY KEY,
  product_name VARCHAR(45) NOT NULL,
  product_price DECIMAL(7,2) NOT NULL, -- changed to (7,2) to allow bigger prices like 2999.99
  product_quantity INT NOT NULL
);

INSERT INTO users (email, first_name, last_name, password)
VALUES 
('matthew@lifechoices.co.za', 'Matthew', 'Brown', 'matthewbrown'),
('sarah.jones@example.com', 'Sarah', 'Jones', 'sarahpass123'),
('peter.smith@example.com', 'Peter', 'Smith', 'petersmith321'),
('linda.wilson@example.com', 'Linda', 'Wilson', 'lindapass'),
('thomas.adams@example.com', 'Thomas', 'Adams', 'thomas321'),
('emma.green@example.com', 'Emma', 'Green', 'emmagreen99'),
('liso@gmail.com', 'Liso', 'Seth', 'liso_seth');

INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES
('P001', 'Wireless Mouse', 199.99, 50),
('P002', 'Mechanical Keyboard', 799.50, 30),
('P003', 'USB-C Hub', 299.00, 75),
('P004', '27-inch Monitor', 2999.99, 20),
('P005', 'External Hard Drive 1TB', 899.00, 40),
('P006', 'Gaming Headset', 499.50, 25),
('P007', 'Laptop Stand', 249.00, 60),
('P008', 'Bluetooth Speaker', 350.00, 45);
