const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
})
.catch((error) => {
    console.log(error);
});
