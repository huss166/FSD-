
import http from "http"

const server2=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("hello");

});
export default server2;