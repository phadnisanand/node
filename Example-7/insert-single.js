const con = require('./connection');

con.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", (err, result) => {
    if (err) throw err;
    // console.log(result);
    console.log("Record inserted.");
    con.destroy();
});