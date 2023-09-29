// import url from "url";

// const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// const q = url.parse(adr, true);

// console.log("host name: " + q.host);
// console.log("path name: " + q.pathname);
// console.log("search : " + q.search);

// const qData = q.query;
// console.log(qData.month);

import http from "http";
import url from "url";
import fs from "fs";

http.createServer(function(req, res){
    const q = url.parse(req.url, true);
    console.log(req.url);
    const filename = "." + q.pathname;
    console.log(filename);
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);