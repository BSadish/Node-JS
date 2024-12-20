const fs=require("fs");
console.log("Start writing the file");
fs.writeFile("example.txt","I am adding something into a file",(err)=>{
    if(err) throw err;
})
console.log("File written successfully")