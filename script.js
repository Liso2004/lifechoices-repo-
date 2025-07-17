const express = require('express');
const app = express();

// Middleware for POST/PUT
app.use(express.json());

// PRODUCTS ROUTES
app.get('/products', (req, res) => {
  res.json({ message: 'This is the GET product path' });
});

app.post('/products', (req, res) => {
  res.json({ message: 'This is the POST product path and a product was added' });
});

app.put('/products/:id', (req, res) => {
  res.json({ message: `This is the PUT product path and product ${req.params.id} was updated` });
});

app.delete('/products/:id', (req, res) => {
  res.json({ message: `This is the DELETE product path and product ${req.params.id} was deleted` });
});

// USERS ROUTES
app.get('/users', (req, res) => {
  res.json({ message: 'This is the GET user path' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'This is the POST user path and a user was added' });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: `This is the PUT user path and user ${req.params.id} was updated` });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: `This is the DELETE user path and user ${req.params.id} was deleted` });
});

//SERVERz
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
