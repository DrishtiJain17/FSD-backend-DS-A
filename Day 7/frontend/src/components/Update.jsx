import React from 'react'
import axios from 'axios'

const Update = () => {
    const handleupdate = async (e) =>{
        e.preventDefault()
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const data ={name, age}
        await axios.put(`${import.meta.env.VITE_API_URL}/users/${id}`,data);
        alert("SUCCESS");

    }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handleupdate}>
            <label>
                ID:<br/>
                <input type='text' name='id'/>
            </label>
            <label>
                Name:<br/>
                <input type='text' name='name'/>                
            </label>
            <label>
                Age:<br/>
                <input type='text' name='age'/>
            </label>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update