import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    });
    switch(req.url)
    {
        case "/":
            res.end("welcome to home page");
            break;
        case "/about":
            res.end("welcome to about page");
            break;
        case "/article":
            res.end("welcome to article page");
            break;
        case "/sign in":
            res.end("welcome to sign in page");
            break;
        case "/sign out":
            res.end("welcome to sign out page");
            break;
        case "/likes":
            res.end("likes page");
            break;
        case "/comments":
            res.end('comments page');
            break;
        default:
            res.end("page not found");
            break;

    }
})

server.listen(3000,()=>console.log("server running on port 3000"));
