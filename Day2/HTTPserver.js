const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200, {"const-type":"text/plain"});


    res.end("hello , world!\n");

});

server.listen(3000,()=>{
    console.log("Server is listenting on port 3000 ...")
})
console.log("Hello world")