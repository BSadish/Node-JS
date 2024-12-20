const fs=require("fs");
console.log("start reading the file");
fs.readFile("example.txt","utf-8",(err,data)=>{
    if(err)throw err;
    console.log("File content",data);

});
console.log("Stop reading the file");