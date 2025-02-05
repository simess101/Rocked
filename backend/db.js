// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'simess',        // Replace with your PostgreSQL user
  host: 'localhost',
  database: 'gym_management',
  password: 'Fluffyest101',   // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
