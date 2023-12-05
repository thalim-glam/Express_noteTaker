const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');

//const uuid = require('./helpers/fsUtils.js');


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
  console.log(`APP OR SERVER WILL BE LIVE AT:  http://localhost:${PORT}`);
});