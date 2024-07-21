const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");

    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });

    // var myquery = { address: /^O/ };
    // dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    //   if (err) throw err;
    //   console.log(obj.result.n + " document(s) deleted");
    //   db.close();
    // });

})
.catch((error) => {
    console.log(error);
});
