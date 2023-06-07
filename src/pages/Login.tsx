import React, { useContext, useEffect, useState } from 'react'
import UserContext, { UserIfc } from '../context/UserContext'

const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState(user)

  const handleUpdateUser = () => {
    const updatedUser: UserIfc = { name: 'John Doe' }
    setCurrentUser(updatedUser)
    setUser(prevUser => ({ ...prevUser, ...updatedUser }))
  }

  useEffect(() => {
    setCurrentUser(user)
  }, [user])

  useEffect(() => {
    console.log('currentUser:', currentUser)
    console.log('user:', user)
  }, [currentUser])

  return (
      <div>
        <h2>Login Page</h2>
        <button onClick={handleUpdateUser}>Update User</button>
        <p>User: {user.name ? user.name : currentUser.name}</p>
      </div>
  )
}

export default Login

