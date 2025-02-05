// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');  // Now this file exists

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mount the auth router at /api
app.use('/api', authRouter);

// You can mount other routers here if needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
