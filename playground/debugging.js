var person = {
    name: 'Andrew'
};

person.age = 25;

debugger;

person.name = 'Mike';

console.log(person);

/*
    debug mode: node(mon) inspect app.js read --title "hi"
    n - next line
    c - continue
    repl - start the repl, you can interact with js objects
*/