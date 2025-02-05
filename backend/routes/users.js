// backend/routes/users.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/users/search?firstName=John&lastName=Doe
router.get('/search', async (req, res) => {
  try {
    const { firstName, lastName } = req.query;
    // Adjust the query based on how you store first and last names
    const query = `
      SELECT id, first_name, last_name, email 
      FROM users 
      WHERE (first_name ILIKE '%' || $1 || '%' AND last_name ILIKE '%' || $2 || '%')
         OR (first_name ILIKE '%' || $2 || '%' AND last_name ILIKE '%' || $1 || '%')
    `;
    const result = await pool.query(query, [firstName, lastName]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error during user search:', error);
    res.status(500).json({ error: 'Server error during user search.' });
  }
});

module.exports = router;
