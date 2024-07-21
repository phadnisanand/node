const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'node',
    password: 'node',
    database: 'node'
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database.');
    return;
});

module.exports = con;