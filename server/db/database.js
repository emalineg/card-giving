const pool = require('./db-setup');

async function getAllCards() {
  const res = await pool.query('SELECT * FROM cards');
  return res.rows; 
}

module.exports = { getAllCards };
