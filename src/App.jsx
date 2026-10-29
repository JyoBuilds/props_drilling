import React,{useState} from 'react'
import "./App.css"
import Dashboard from './components/Dashboard';
 import { UserContext } from "./context/UserContext";
const App = () => {
  const[name,setName]=useState("Jyo");
  const[count,setCount]=useState(100);

  function increaseCount(){
    setCount(count+1);
  }
  return (
    <UserContext.Provider value={{name,count,increaseCount}}>
      <h3>App</h3>
      <Dashboard />
    </UserContext.Provider>
  )
}

export default App
