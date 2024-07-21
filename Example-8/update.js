const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });

    // var myquery = { address: /^M/ };
    // var newvalues = { $set: {name: "Mickey" } };
    // dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " document(s) updated");
    //     db.close();
    // });
    

})
.catch((error) => {
    console.log(error);
});
