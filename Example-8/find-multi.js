const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");

    // var query = { address: "Park Lane 38" };
    
    var query = {
        address : {
            "$ne" : "Gandhinagar"
        }
    };
    
    // var query = {
    //     address : /^M/
    // };

    dbo.collection("customers")
        .find(query)
        // .sort({
        //     name: 1,
        //     address: -1
        // })
        // .limit(5)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });

})
.catch((error) => {
    console.log(error);
});
