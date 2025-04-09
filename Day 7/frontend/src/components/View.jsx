import React, { useEffect, useState } from 'react'
import axios from 'axios'
const View = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    viewdata();
  },[])
  const viewdata= async()=>{
    const res=await axios.get(`${import.meta.env.VITE_API_URL}/users`);
    console.log(res);
    setUsers(res.data);
  }
  return (
    <div>
      <h1>Registered Users list</h1>
      <table style={{border:'1px solid black', backgroundColor:'',width:'100%',textAlign:'center',borderCollapse: 'collapse'}}>
        <thead >
          <tr style={{border:'3px solid black',backgroundColor:'#0f546f', color:'white'}}>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
        {
        users.map((user)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))
      }
        </tbody>
    

      </table>
      
    </div>
  )
}

export default View