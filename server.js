const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter { }
// initiazile object
const myEmitter = new Emitter();

// Creating Server
const server = http.createServer((req, res) => {
    console.log('gg');
})

// Listenig to server on port 3000
server.listen(3000, (req, res) => {
    console.log("Server is listening on port: 3000.")
});


/*
myEmitter.on('log', (msg) => logEvents(msg));

    myEmitter.emit('log', "log event emitted");
*/