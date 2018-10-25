console.log("Starting app.");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process ', process.argv);
console.log('Yargs ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (!note) { console.error("Note was not created") }
    else { console.log("Note created successfullly") }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    // require title
    notes.getNote(argv.title);
} else if (command === 'remove') {
    // require title
    console.log("Removing");
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
