import http from "http"

const server1=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("welcome to sreyas");

});
export default server1;