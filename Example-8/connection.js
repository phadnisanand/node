const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/node';

// MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Database created!!!');
//     db.close();
// })

let connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err) {
                reject(err);
            }
            resolve(db);
        })
    });
};

module.exports = {
    connect
};