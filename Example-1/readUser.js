const fs = require('fs');

fs.readFile('./user.json', (err, data) => {
    if (err) {
        console.log("Error reading file: ", err);
    }
    let user = JSON.parse(data);
    console.log(user);
});