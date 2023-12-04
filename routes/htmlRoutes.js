const router = require('express').Router();
const path = require('path');

// Routes to display notes.html and index.html
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Export the routes

module.exports = router;