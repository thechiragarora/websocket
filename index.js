const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  setInterval(() => {
    const random = Math.floor(Math.random()*100);
    wss.clients.forEach((client) => {
        client.send(random);
    })
  }, 10000);
});

app.get('/', (req, res) => res.send('Hello World!'))

server.listen(3000, () => console.log(`Lisening on port :3000`))