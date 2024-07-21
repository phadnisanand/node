const crypto = require('crypto');
const fs = require('fs');

crypto.generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret'
    }
    }, (err, publicKey, privateKey) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        fs.writeFile('private.txt', privateKey, (err) => {
            if (err) {
                console.log("Error writing private key to file.", err);
                return;
            }
        });
        fs.writeFile('public.txt', publicKey, (err) => {
            if (err) {
                console.log("Error writing public key to file.", err);
                return;
            }
        });
        console.log("Keys generated!");
    }
);
