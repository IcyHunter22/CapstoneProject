console.log('➡️  Starting productivity-extension/server.js');
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chrome Extension Backend Running!');
});

app.get('/data', (req, res) => {
  db.all('SELECT * FROM user_activity', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
