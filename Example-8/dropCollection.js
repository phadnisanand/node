const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");

    dbo.collection("orders").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
      });

})
.catch((error) => {
    console.log(error);
});
