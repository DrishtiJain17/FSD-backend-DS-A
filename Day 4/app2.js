const express= require('express');
const fs = require('fs/promises')
const app =express();
app.use(express.json())
let users=[];
const readdata=async()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'))
}
const writedata=async()=>{
    await fs.writeFile('./data.json', JSON.stringify(users, null, 2));
}
readdata();
app.get('/getdata', async (req,res)=>{
    res.json(users);
});
app.post('/users',(req,res)=>{
    const {uname,age}=req.body;
    const newid = users.length>0?users[users.length-1].id+1:1
    const newuser={id:newid,uname,age}
    users.push(newuser);
    writedata();
    res.status(200).json({message:'user registration successful',data:newuser});
})
app.listen(9000,()=>{
    console.log("Server is running on port 9000")
});