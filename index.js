const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    res.end('This is rsponce!');
});
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for a request now!')
});

