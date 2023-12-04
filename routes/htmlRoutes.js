const router = require('express').Router();
const path = require('path');

// Routes to display index.html

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


//  Routes to display notes.html to the client as a response
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});


// Export the routes
module.exports = router;