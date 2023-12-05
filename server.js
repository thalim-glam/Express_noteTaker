const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const app = express();
const fs = require('fs');
const path = require('path');
//const uuid = require('./helpers/uuid');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Import and use your route files (apiRoutes.js and htmlRoutes.js).
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.listen(PORT, () => {
  console.log(`Server will be running on  http://localhost: ${PORT}`);
});