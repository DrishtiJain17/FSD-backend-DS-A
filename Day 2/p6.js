const http=require("http");

const server=http.createServer(async (req,res) =>{
    const data=await fetch("https://dummyjson.com/products");
    const myData = await data.json();
    const products=myData.products;
    res.writeHead(200,{"content-type":"application/json"})
    const title=products.map((ele)=>{
        return ele.title;
    });
    res.end(JSON.stringify(title));
})

server.listen(9000,(err)=>{
    if(err)
        console.log("Error: "+err)
    console.log('Server is running at http://localhost:9000/');
});