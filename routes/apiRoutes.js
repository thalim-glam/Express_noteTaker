// Routes for GET notes and POST (create) notes
// Refer to the mini project (copy the helpers folder. this should contain fsUtils.js) - done
// Refer to tips.js routes and copy the GET, POST route - done
// Build GET all route to get all notes - done
// Build POST (create) route to create a new note - done
// export the routes - done

const apiRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
//const {
//  readFromFile,
//  readAndAppend,
//  writeToFile,
//} = require('../helpers/fsUtils'); --- not worked

// GET Route for retrieving all the notes
apiRouter.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db.db.json", "utf8"));
  res.json(dbJson);
});

// POST request to this route
apiRouter.post('api/notes', (req, res) => {
  console.log(req.body);
  const dbJson = JSON.parse(fs.readFileSync("db.db.json", "utf8"));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    nid: uuidv4(),
  };

  dbJson.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  res.json(dbJson);
});

module.exports = apiRouter;
