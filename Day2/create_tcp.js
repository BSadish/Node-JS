const net=required("net");
const readline=require("readline");

// Create a TCP Server
const server=net.createServer((socket)=>{
    console.log("Client Connected");
    socket.write("hello, TCP World!\n");

    // 
})