const fs= require("fs")

console.log("Start reading the file");
const data=fs.readFileSync('example.txt',"utf-8");
console.log("data:",data);
console.log("Stop reading the file");