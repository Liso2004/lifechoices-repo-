const express = require('express');
const app = express();

// Middleware 
app.use(express.json());

//employees

// GET employees
app.get('/employees', (req, res) => {
  res.json({ message: 'This is the GET employees path' });
});

// POST employees
app.post('/employees', (req, res) => {
  // Normally you'd handle adding a new employee here
  res.json({ message: 'This is the POST employees path - new employee added' });
});

// PATCH employees (update partial fields)
app.patch('/employees/:id', (req, res) => {
  // Normally you'd handle updating specific fields of employee here
  res.json({ message: `This is the PATCH employees path - employee ${req.params.id} updated` });
});

// DELETE employees
app.delete('/employees/:id', (req, res) => {
  // Normally you'd handle deleting an employee here
  res.json({ message: `This is the DELETE employees path - employee ${req.params.id} deleted` });
});


//routes

// GET managers
app.get('/managers', (req, res) => {
  res.json({ message: 'This is the GET managers path' });
});

// POST managers
app.post('/managers', (req, res) => {
  res.json({ message: 'This is the POST managers path - new manager added' });
});

// PATCH managers
app.patch('/managers/:id', (req, res) => {
  res.json({ message: `This is the PATCH managers path - manager ${req.params.id} updated` });
});

// DELETE managers
app.delete('/managers/:id', (req, res) => {
  res.json({ message: `This is the DELETE managers path - manager ${req.params.id} deleted` });
});


//server 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
