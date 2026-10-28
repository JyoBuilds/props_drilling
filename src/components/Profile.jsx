import React from 'react'
import Username from './Username'
const Profile = ({name}) => {
  return (
    <div>
      <h3>Profile</h3>
      <Username name={name}/>
    </div>
  )
}

export default Profile
