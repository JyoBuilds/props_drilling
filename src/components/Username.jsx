import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
const Username = () => {
  const {count,increaseCount}=useContext(UserContext);
  return (
    <div>
      Username - {count}
      <button onClick={increaseCount}>Click</button>
    </div>
  )
}

export default Username
