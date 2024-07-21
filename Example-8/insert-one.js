const {connect} = require('./connection');

connect()
.then((db) => {
    var dbo = db.db("node");
    var document = {
        name: 'TCS',
        address: 'Gandhinagar'
    };
    dbo.collection('customers').insertOne(document, (err, res) => {
        if (err) throw err;
        console.log("1 document created.");
        db.close();
    });
})
.catch((error) => {
    console.log(error);
});
