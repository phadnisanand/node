const con = require('./connection');

// var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
var sql = "DELETE FROM customers";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    con.destroy();
});
