const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/', '/dipak'], (req, res) => {
    let response = `
Hostname: ${req.hostname}
IP: ${req.ip}
Cookies: ${req.cookies}
Path: ${req.path}
Protocol: ${req.protocol}
    `;
    res.send(response);
});

app.post('/users/:id', (req, res) => {
    let response = {
        "params" : req.params,
        "body" : req.body,
        "query" : req.query
    };
    res.json(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
