const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");
    dbo.collection("customers").findOne({
        // name: 'Michael'
        // name: /^H/
    }, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
})
.catch((error) => {
    console.log(error);
});
