//db.js 
// using pool since its more efficant then the standard method 
//pool =  a managed set of database connections 
// that you can reuse efficiently instead of 
// opening/closing connections manually every time.

const mysql = require('mysql2/promise')
require('dotenv').config();// .env file

//connection 
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


//functions to GET employees data 
async function getAllEmployees() {
    try {
        const[rows]=await pool.query('SELECT * FROM employees');
        console.log('All Employees:',rows);
        return rows;
    } catch(e){
        console.error('Error getting employees:', e);
        throw e;
    }
}

// function to get the employees id 
async function getEmployeeById(id) {
    try {
        const[rows]=await pool.query('SELECT * FROM employees WHERE employee_id = ?',[id]);
        console.log(`Employees with ID${id}:`,rows);
        return rows[0] ||null;
    } catch(e){
        console.error(`Error getting employees ID ${id}:`, e);
        throw e;
    }
}

//ADD FUNCTION 
async function addEmployee(firstName, lastName, email, phone, department, salary) {
  // insert
  await pool.query(
    `INSERT INTO employees (first_name, last_name, email, phone_number, department, salary)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [firstName, lastName, email, phone, department, salary]
  );

  // return all employees to confirm
  const employees = await getAllEmployees();
  console.log('✅ Employee Added. Current Employees:');
  console.table(employees);
  return employees;
}

// REMOVE FUNCTION
async function removeEmployee(id) {
  // delete
  await pool.query(`DELETE FROM employees WHERE employee_id = ?`, [id]);

  // return all employees to confirm
  const employees = await getAllEmployees();
  console.log(`✅ Employee with ID ${id} removed. Current Employees:`);
  console.table(employees);
  return employees;
}

// UPDATE FUNCTION 
async function updateEmployee(id, firstName, lastName, email, phone, department, salary) {
  // update
  await pool.query(
    `UPDATE employees
     SET first_name = ?, last_name = ?, email = ?, phone_number = ?, department = ?, salary = ?
     WHERE employee_id = ?`,
    [firstName, lastName, email, phone, department, salary, id]
  );

  // return updated employee data
  const updated = await getEmployeeById(id);
  console.log(`✅ Employee with ID ${id} updated. New Data:`);
  console.table(updated);
  return updated;
}

// testing the functions 
(async () => {
  try {
    // ADD test
    await addEmployee('Alice', 'Walker', 'alice.walker@gmail.com', '555-9999', 'Design', 52000);

    // UPDATE test
    await updateEmployee(1, 'Johnathan', 'Doe', 'john.doe@yahoo.com', '555-1111', 'IT', 70000);

    // REMOVE test
    await removeEmployee(27);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end(); // close pool when done
  }
})();

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  removeEmployee,
  updateEmployee
};