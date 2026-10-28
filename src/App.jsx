import React,{useState} from 'react'
import "./App.css"
import Dashboard from './components/Dashboard';

const App = () => {
  const[name,setName]=useState("Jyo");
  return (
    <div>
      <h1>App</h1>
      <Dashboard name={name}/>
    </div>
  )
}

export default App
