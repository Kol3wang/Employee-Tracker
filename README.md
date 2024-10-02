# Employee-Tracker

Description

The Employee Tracker is a command-line application that allows business owners to manage their company’s employee database. Using Node.js, Inquirer, and PostgreSQL, users can view, add, and update departments, roles, and employees in the database.

Table of Contents

	•	Installation
	•	Usage
	•	Features
	•	Technologies Used
	•	Walkthrough Video
	•	License
	•	Contributing
	•	Questions

Installation

	1.	Clone the repository to your local machine:
        git clone https://github.com/Kol3wang/Employee-Tracker.git


    2.	Install the required dependencies:
        bash
        npm install

    3.	Set up the PostgreSQL database:
	•	Create a PostgreSQL database (e.g., employee_tracker).
	•	Run the SQL schema to create the necessary tables:
        psql -U postgres 
        \i schema.sql
        \i seeds.sql

Usage

To run the application, use the following command:
node src/index.js

Once launched, the application will present a menu where you can perform the following actions:

	•	View all departments
	•	View all roles
	•	View all employees
	•	Add a department
	•	Add a role
	•	Add an employee
	•	Update an employee’s role

Features

	•	View all departments: Lists department names and IDs.
	•	View all roles: Displays job titles, role IDs, department names, and salaries.
	•	View all employees: Displays employee IDs, names, job titles, departments, salaries, and managers.
	•	Add new departments, roles, and employees: Prompts the user for necessary information and adds the data to the database.
	•	Update employee role: Allows users to update an employee’s role.

Technologies Used

	•	Node.js
	•	Inquirer
	•	PostgreSQL
	•	pg (node-postgres)

Walkthrough Video

https://youtu.be/xZHXxHYCeH4

The video demonstrates the usage and functionality of the Employee Tracker application.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing

Contributions are welcome! Please follow these steps for contributing:

	1.	Fork the repository.
	2.	Create your feature branch (git checkout -b feature/YourFeature).
	3.	Commit your changes (git commit -m 'Add YourFeature').
	4.	Push to the branch (git push origin feature/YourFeature).
	5.	Open a pull request.

Questions

If you have any questions or issues, feel free to contact me at:

	•	GitHub: kol3wang

You can modify the sections as needed, particularly the Walkthrough Video section once you have the video ready. Let me know if you need further modifications!