//const uuid = require('../helpers/fsUtils.js'); Not helpful

const fs = require('fs');
const appRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
} = require('../helpers/fsUtils');

const { text } = require('express');

//----------------------------------------------- GET ------------------------------------------------

appRouter.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//----------------------------------------------- POST ------------------------------------------------

appRouter.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text, id } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    }
    console.log("Note added successfully")
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
    console.log("Note added successfully")
  } else {
    res.error('Error in adding Note');
  }
});

//--------------------------------------------- DELETE FUNCTION-----------------------------------------
appRouter.delete('/notes/:id', (req, res) => {
  var data = fs.readFileSync("./db/db.json", "utf8");
  const dataJSON = JSON.parse(data);
  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });

  fs.writeFile("db/db.json", JSON.stringify(newNotes), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  res.json(newNotes);
  console.log(" BONUS : Note deleted successfully")
});
//-------------------------------------------THIS IS THE BONUS PART-------------------------------------

module.exports = appRouter;