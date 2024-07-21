const fs = require('fs');
const fsPromises = fs.promises;

async function readUsers() {
    try {

        let data;

        data = await fsPromises.readFile('user1.json');
        printUser(data);

        data = await fsPromises.readFile('user2.json');
        printUser(data);

        data = await fsPromises.readFile('user3.json');
        printUser(data);

    } catch (e) {
        console.log("Error: ", e);
        return false;
    }
}

function printUser(user) {
    user = JSON.parse(user);
    console.log("Name: " + user.name + ", Id: " + user.id);
}

readUsers();
