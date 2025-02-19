const http=require("http");
const fs=require('fs/promises');

const server=http.createServer(async (req,res) =>{
    const data=await fs.readFile('./data.json');
    const mydata=JSON.parse(data)
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const name=mydata.map((ele)=>{
        return ele.name;
    })   
    console.log(JSON.stringify(name)) 
    res.end(JSON.stringify(name))
})


server.listen(9010,(err)=>{
    if(err)
        console.log("Error: "+err)
    console.log('Server is running at http://localhost:9010/');
});