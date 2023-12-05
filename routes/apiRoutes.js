// Routes for GET notes and POST (create) notes
// Refer to the mini project (copy the helpers folder. this should contain fsUtils.js) - done
// Refer to tips.js routes and copy the GET, POST route - done
// Build GET all route to get all notes - done
// Build POST (create) route to create a new note - done
// export the routes - done

const appRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the tips
appRouter.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
appRouter.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding Note');
  }
});

module.exports = appRouter;