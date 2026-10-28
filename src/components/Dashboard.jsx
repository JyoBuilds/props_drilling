import React from 'react'
import Profile from './Profile'

const Dashboard = ({name}) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile name={name} />
    </div>
  )
}

export default Dashboard
