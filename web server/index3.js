import http from "http"

const server3=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("hii");

});

export default server3;