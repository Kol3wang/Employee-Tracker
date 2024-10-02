import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_tracker',
  password: 'wangchuk',
  port: 5432,
});

client.connect();

export default client;