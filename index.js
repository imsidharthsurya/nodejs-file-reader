const fs=require("fs");

const dt1=fs.readFileSync("index.html","utf-8");
const dt2=fs.readFileSync("readme.txt","utf-8");
const dt3=fs.readFileSync("student.csv","utf-8");
console.log(dt1);
console.log(dt2);
console.log(dt3);