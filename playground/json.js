// var obj = {
//   "fname":"madhu",
//   "lname":"komuravelly",
//   "age":"25"
//
// }
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString = '{"fname":"karthee","lname":"jp","age":26}'
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(typeof personString);

const fs = require('fs');

var originalNote = {
  title:'some title',
  body:'some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
