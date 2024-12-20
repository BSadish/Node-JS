const fs=require("fs");
console.log("Start writing the file");
fs.appendFile("apple.txt","\n I am adding something into a file",(err)=>{
    if(err) throw err;
})
console.log("File written successfully")