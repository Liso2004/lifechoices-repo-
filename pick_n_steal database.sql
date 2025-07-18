create database pick_n_steal;
use pick_n_steal;

CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
	email VARCHAR(100) NOT NULL,
    phone_number varchar(15) NOT NULL, 
    department varchar(50) NOT NULL,
    salary decimal(10,2) NOT NULL,
    primary key(employee_id)
);

INSERT INTO employees (first_name, last_name, email, phone_number, department, salary)
VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234', 'IT', 50000.00),
('Jane', 'Smith', 'jane.smith@example.com', '555-5678', 'HR', 45000.00),
('Michael', 'Johnson', 'michael.johnson@example.com', '555-8765', 'Finance', 60000.00),
('Emily', 'Davis', 'emily.davis@example.com', '555-4321', 'Marketing', 48000.00);