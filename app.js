const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("hi quadrivim");
    }else{
        res.end("page not found sorry quadrivium");
    }
})
server.listen();