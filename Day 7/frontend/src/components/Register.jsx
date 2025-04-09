import React from 'react'
import axios from 'axios'

const Register = () => {
    const handleRegister=async(e)=>{
        e.preventDefault();
        const user={
            name:e.target.name.value,
            age:e.target.age.value
        }
        await axios.post(`${import.meta.env.VITE_API_URL}/users`, user)
        alert("User registered successfully!!")
    }
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleRegister}>
        <label>Name: </label><input type="text" name="name"/>
        <label>Age: </label><input type="number" name="age"/>
        <button type='submit'>Register User</button>
      </form>
    </div>
  )
}

export default Register