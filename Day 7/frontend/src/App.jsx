import React from 'react'
import Register from './components/Register'
import Delete from './components/Delete'
import View from './components/View'
import Update from './components/Update'
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <h1>User Registration System</h1>
      <View/>
      <Register/>
      <Update/>
      <Delete/>
    </div>
  )
}

export default App
