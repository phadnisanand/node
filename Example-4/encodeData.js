const fs = require('fs');
const crypto = require('crypto');

let publicKey;
let privateKey;
let dataToEncode = Buffer.from('This is very secret message!');
console.log("Original Message: ", dataToEncode.toString('utf8'));

fs.readFile('public.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    publicKey = data;

    fs.readFile('private.txt', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        privateKey = data;
        
        let encodedData = crypto.publicEncrypt(publicKey, dataToEncode);
        console.log("Encoded Message: ", encodedData.toString('base64'));

        let decodedData = crypto.privateDecrypt({
            key: privateKey,
            passphrase: 'top secret'
        }, encodedData);

        console.log("Decoded Message: ", decodedData.toString('utf8'));

    })


});