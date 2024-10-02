import inquirer from 'inquirer';
import client from './dbConfig.js';
import 'console.table';

function mainMenu() {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'
    ]
  }).then(answer => {
    switch (answer.action) {
      case 'View All Departments':
        viewAllDepartments();  // Call the viewAllDepartments function here
        break;
      case 'View All Roles':
        viewAllRoles();  // Implement similar functions for other options
        break;
      case 'View All Employees':
        viewAllEmployees();  // Implement similar functions for other options
        break;
      case 'Exit':
        client.end();  // Close the PostgreSQL connection when done
        process.exit();
    }
  });
}

// Add your viewAllDepartments function here
function viewAllDepartments() {
  client.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res.rows);  // Display departments in a table
    mainMenu();  // Return to the main menu after displaying
  });
}

// Example of adding other functions, like viewAllRoles
function viewAllRoles() {
  const query = `
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    LEFT JOIN department ON role.department_id = department.id;
  `;
  client.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    mainMenu();
  });
}

// Add similar functions for viewing employees, adding departments, etc.

mainMenu();  // Start the main menu