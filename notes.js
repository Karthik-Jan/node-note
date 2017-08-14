const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNote = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //here the logic is duplicateNotes loads only with the title which is matched to given in commandline
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  };
};




var removeNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title !== title); //newNotes loads all titles already exist except given one
  saveNote(newNotes);
  return notes.length !== newNotes.length;

};

module.exports = {
  addNote,
  removeNote
};
