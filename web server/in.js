import http from "http"
import server1 from "./index.js";
import server2 from "./index2.js";
import server3 from "./index3.js";

server1.listen(3000,()=>console.log("server running on port 3000"));
server2.listen(4000,()=>console.log("server running on port 4000"));
server3.listen(5000,()=>console.log("server running on port 5000"));


