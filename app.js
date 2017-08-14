const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var res = process.argv[2];
console.log("argument ==> " + res);
console.log("process ==> " + process.argv);
console.log("yargs ==>", argv);

if (res === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(' Note Created');
    console.log(' -----');
    console.log(`Title: ${note.title}`);
  } else {
    console.log(' Note already taken');
  };
} else if (res === 'remove') {
  var rNote = notes.removeNote(argv.title);
  var removedNote = rNote ? 'Note Removed' : 'Note not found';
  console.log(removedNote);


} else {
  console.log(res + ' is not recognized');
}


//console.log(_.isString(true));


// var user = os.userInfo();
// //
// // var result=test.test1(2,3);
// // console.log(result);
//
// fs.appendFileSync('greeting.txt',`hello ${user.username}`);
