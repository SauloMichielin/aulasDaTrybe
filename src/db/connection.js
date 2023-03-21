const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  database: 'bank',
  port: 3306,
  host: 'database',
});

module.exports = connection;
