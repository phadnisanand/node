const fs = require('fs');

fs.readFile('./user1.json', (err, data) => {
    printUser(data);
    fs.readFile('./user2.json', (err, data) => {
        printUser(data);
        fs.readFile('./user3.json', (err, data) => {
            printUser(data);
        });
    });
})

function printUser(user) {
    user = JSON.parse(user);
    console.log("Name: " + user.name + ", Id: " + user.id);
}