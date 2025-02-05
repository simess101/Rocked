// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const checkinsRouter = require('./routes/checkins'); // <-- Import checkins routes

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mount routers
app.use('/api', authRouter);
app.use('/api/checkins', checkinsRouter); // <-- This will map /api/checkins/* endpoints

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
