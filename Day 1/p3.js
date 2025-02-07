const fs=require("fs");
const data="I am the new Data File";
fs.writeFileSync("data.txt",data);