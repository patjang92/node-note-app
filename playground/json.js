// var obj = {
//     name: 'Andrew'
// }
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// var personString = '{"name": "Andrew", "age": 25}'
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note)
console.log(note.title);