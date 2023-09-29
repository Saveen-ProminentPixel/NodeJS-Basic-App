// console.log("Hello World");

// var events = require("events");
// var eventEmitter = new events.EventEmitter();

// var listener1 = function listener1() {
//     console.log("listener1 Executed");
// }

// var listener2 = function listener2() {
//     console.log("listener2 executed");
// }

// eventEmitter.addListener("connection", listener1);

// eventEmitter.on("connection", listener2);

// var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
// console.log(eventListeners + "Listenrs listening to the connection");

// eventEmitter.emit("connection");

// eventEmitter.removeListener('connection', listener1);
// console.log("Listner1 will not listen now.");

// // Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");

// buf = new Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // outputs: abcde
// console.log( buf.toString('utf8',0,5));    // outputs: abcde
// console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// var buf = new Buffer.from('Simply Easy Learning');
// var json = buf.toJSON(buf);

// console.log(json);

// var fs = require("fs");
// var data = "";

// var readerStream = fs.createReadStream("input.txt");

// readerStream.setEncoding("UTF8");

// readerStream.on("data", function(chunk){
//     data += chunk;
// });

// readerStream.on("end", function(){
//     console.log(data);
// });

// readerStream.on("error", function(err){
//     console.log(err.stack);
// });

// console.log("Program Ended");

// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

// var fs = require("fs");

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log("Program Ended");

// var fs = require("fs");
// var zlib = require('zlib');

// // Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log("File Compressed.");

// var fs = require("fs");
// var zlib = require('zlib');

// // Decompress the file input.txt.gz to input.txt
// fs.createReadStream('input.txt.gz')
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream('input.txt'));
  
// console.log("File Decompressed.");

// var fs = require("fs");

// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");

// var fs = require("fs");

// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");
   
//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });

// var fs = require("fs");
// var buf = new Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to read the file");
   
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + " bytes read");
      
//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });

// var fs = require("fs");
// var buf = new Buffer(1024);

// console.log("Going to open an existing file");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to truncate the file after 10 bytes");
   
//    // Truncate the opened file.
//    fs.ftruncate(fd, 10, function(err) {
//       if (err) {
//          console.log(err);
//       } 
//       console.log("File truncated successfully.");
//       console.log("Going to read the same file"); 
      
//       fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//          if (err) {
//             console.log(err);
//          }

//          // Print only read bytes to avoid junk.
//          if(bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//          }

//          // Close the opened file.
//          fs.close(fd, function(err) {
//             if (err) {
//                console.log(err);
//             } 
//             console.log("File closed successfully.");
//          });
//       });
//    });
// });

// var fs = require("fs");

// console.log("Going to delete an existing file");
// fs.unlink('input.txt', function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File deleted successfully!");
// });

// var fs = require("fs");

// console.log("Going to create directory /tmp/test");
// fs.mkdir('/tmp/test',function(err) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Directory created successfully!");
// });

// console.log( __filename );
// console.log( __dirname );

// function printHello() {
//     console.log( "Hello, World!");
//  }
 
//  // Now call above function after 2 seconds
//  setTimeout(printHello, 2000);

// function printHello() {
//     console.log( "Hello, World!");
//  }
 
//  // Now call above function after 2 seconds
//  var t = setTimeout(printHello, 2000);
 
//  // Now clear the timer
//  clearTimeout(t);

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// // Create a server
// http.createServer( function (request, response) {  
//    // Parse the request containing file name
//    var pathname = url.parse(request.url).pathname;
   
//    // Print the name of the file for which request is made.
//    console.log("Request for " + pathname + " received.");
   
//    // Read the requested file content from file system
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
         
//          // HTTP Status: 404 : NOT FOUND
//          // Content Type: text/plain
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {	
//          //Page found	  
//          // HTTP Status: 200 : OK
//          // Content Type: text/plain
//          response.writeHead(200, {'Content-Type': 'text/html'});	
         
//          // Write the content of the file to response body
//          response.write(data.toString());		
//       }
      
//       // Send the response body 
//       response.end();
//    });   
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');

// var http = require('http');

// // Options to be used by request 
// var options = {
//    host: 'localhost',
//    port: '8081',
//    path: '/index.htm'  
// };

// // Callback function is used to deal with response
// var callback = function(response) {
//    // Continuously update stream with data
//    var body = '';
//    response.on('data', function(data) {
//       body += data;
//    });
   
//    response.on('end', function() {
//       // Data received completely.
//       console.log(body);
//    });
// }
// // Make a request to the server
// var req = http.request(options, callback);
// req.end();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello World");
// });

// var server = app.listen(8081, function(){
//    var host = server.address().address;
//    var port = server.address().port;

//    console.log("Example app listening at http://%s:%s", host, port);
// });

// var express = require('express');
// var app = express();

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// const { urlencoded } = require('body-parser');
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'));
// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.htm" );
// });

// app.post('/process_post',urlencodedParser, function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.body.first_name,
//       last_name:req.body.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// });

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// });

// import express from 'express';
// var app = express();
// import { readFile } from "fs";

// app.get('/listUsers', function (req, res) {
//    readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// });

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// });

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var user = {
//    "user4" : {
//       "name" : "mohit",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    }
// }

// app.post('/addUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       data["user4"] = user["user4"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })


// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/:id', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       var users = JSON.parse( data );
//       var user = users["user" + req.params.id] 
//       console.log( user );
//       res.end( JSON.stringify(user));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var id = 2;

// app.delete('/deleteUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + 2];
       
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// import { hostname } from 'node:os'; 
// console.log(os.availableParallelism());
// console.log(os.EOL);
// console.log(os.arch());
// console.log(os.constants);
// console.log(os.cpus());
// console.log(os.devNull)
// console.log(os.endianness())
// console.log(os.freemem());
// console.log(os.getPriority());
// console.log(os.homedir());
// console.log(hostname());


// import http from "http";

// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>Hello world!!!</h1>");
// });

// server.listen(port, ()=> {console.log("Hello there!!!")},`Server is listening on port ${port}`);

// import {createServer, request} from "node:http";
// import {connect} from "node:net";
// import {url} from "node:url";


// const proxy = createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("okay");
// });

// proxy.on("connect", (req, clientSocket, head) => {
//     const {port, hostname} = new url(`http://${req.url}`);
//     const serverSocket = connect(port || 80, hostname, () => {
//         clientSocket.write("HTTP/1.1 200 Connection Established\r\n" + 'Proxy-agent: Node.js-Proxy\r\n' + '\r\n');
//         serverSocket.write(head);
//         serverSocket.pipe(clientSocket);
//         clientSocket.pipe(serverSocket);
//     });
// });

// proxy.listen(1337, "127.0.0.1", () => {
//     const options = {
//         port: 1337,
//         host: "127.0.0.1",
//         method: "CONNECT",
//         path: "www.google.com:80",
//     };

//     const req = request(options);
//     req.end();

//     req.on("connect", (res, socket, head) => {
//         console.log("got connected!");

//         socket.write("GET / HTTP/1.1\r\n" + 'Host: www.google.com:80\r\n' + 'Connection: close\r\n' + '\r\n');
//         socket.on("data", (chunk) => {
//             console.log(chunk.toString());
//         });
//         socket.on("end", () => {
//             proxy.close();
//         });
//     });
// });