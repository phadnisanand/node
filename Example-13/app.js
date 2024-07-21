const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.set({
        'Content-Type' : 'text/html',
        'x-abc' : 1
    });
    res.append('x-abc', 2);
    res.send("Home Page.");
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/download', (req, res) => {
    res.download('./download.txt');
});

app.get('/profileinfo', (req, res) => {
    res.status(201).json({
        name: 'Dipak',
        city: 'Gandhinagar'
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
