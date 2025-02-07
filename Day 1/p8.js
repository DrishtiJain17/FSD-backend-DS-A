const fs = require("fs")
const path=fs.mkdir("New Dir",{recursive:true},(err)=>{
    if(err){
        console.error("an error occurred",err);
        return;
    }
    console.log("Created new directory");
});