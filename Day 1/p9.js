const fs = require("fs");
fs.rmdir("./New Dir",(err)=>{
    if(err){
        console.error("Couldn't be deleted",err);
        return;
    }
    console.log("Deleted the directory")
})