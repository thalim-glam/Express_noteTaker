const express = require('express');
const app = express();
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Import and use your route files (apiRoutes.js and htmlRoutes.js).
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace * with the actual origin of your client application
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:` + PORT);
});