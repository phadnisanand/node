const fs = require('fs');

fs.appendFile('data.txt', 'Hello, data written!', (err) => {
    if (err) {
        console.log ('Error: ', err);
    }
    console.log('Data saved!');
});