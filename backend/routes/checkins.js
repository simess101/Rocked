// backend/routes/checkins.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/checkins/checkin
router.post('/checkin', async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required for check-in.' });
    }
    
    // Insert a new check-in record (with check_out_time defaulting to NULL)
    const result = await pool.query(
      `INSERT INTO checkins (user_id) VALUES ($1) RETURNING *`,
      [user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Check-in error:', err);
    res.status(500).json({ error: 'Server error during check-in.' });
  }
});

// (Optional) POST /api/checkins/checkout
router.post('/checkout', async (req, res) => {
  try {
    const { checkin_id } = req.body;
    if (!checkin_id) {
      return res.status(400).json({ error: 'Check-in ID is required for check-out.' });
    }
    
    // Update the record with the current time for check_out_time
    const result = await pool.query(
      `UPDATE checkins SET check_out_time = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      [checkin_id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Check-out error:', err);
    res.status(500).json({ error: 'Server error during check-out.' });
  }
});

// GET /api/checkins/current
router.get('/current', async (req, res) => {
    try {
      const result = await pool.query(
        `SELECT c.id, c.check_in_time, u.id AS user_id, u.username, u.email, u.role
         FROM checkins c
         JOIN users u ON c.user_id = u.id
         WHERE c.check_out_time IS NULL`
      );
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Error fetching current check-ins:', err);
      res.status(500).json({ error: 'Server error retrieving current check-ins.' });
    }
  });  

module.exports = router;
