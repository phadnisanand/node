const fs = require('fs');
const fsPromises = fs.promises;

fsPromises.readFile('./user1.json')
.then((data) => {
    printUser(data);
    return fsPromises.readFile('./user2.json');
}
).then((data) => {
    printUser(data);
    return fsPromises.readFile('./user3.json');
}).then((data) => {
    printUser(data);
}).catch((error) => {
    console.log("Error: ", error);
});

function printUser(user) {
    user = JSON.parse(user);
    console.log("Name: " + user.name + ", Id: " + user.id);
}
