console.log("Starting notes.js")

// () => does not bind the 'this' keyword or arguments array
// module.exports.addNote = () => {
//     console.log("addNote");
//     return 'New note';
// }

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { title, body };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log("Getting note ", title);
    var notes = fetchNotes();
    return notes.find(note => note.title === title);
}

var removeNote = (title) => {
    console.log("Removing note ", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    debugger;
    console.log("--");
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}