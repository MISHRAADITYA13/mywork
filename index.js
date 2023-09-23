const fs = require("fs");
const http = require("http");

const port = 8000;
const hostname = "localhost";

const home = fs.readFileSync("./profession.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end(home);
    }
    else{
        res.end("404 Not Found");
    }
}).listen(port,hostname,()=>{
    console.log(`working at http://${hostname}:${port}`);
});