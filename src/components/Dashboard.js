import React from 'react'
import Logout from './Logout'

export default function Dashboard({user}) {
  return (
    <div>
      Dashboard, {user}
      <Logout />
    </div>
  )
}
