const { Pool } = require('pg');
require('dotenv').config();
console.log(process.env.DATABASE_URL); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1, 
  idleTimeoutMillis: 10000, 
  connectionTimeoutMillis: 5000, 
});

module.exports = pool;
