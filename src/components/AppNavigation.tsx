import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, HStack, Text } from '@chakra-ui/react'
import { UserIfc } from '../context/UserContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
const AppNavigation = ({
  loggedIn,
  OnLogout,
}: {
  loggedIn: boolean
  OnLogout: () => void
}) => {
  const [user, setUser] = useState<UserIfc>({})
  useEffect(() => {
    console.log('Updated User Info displayed from AppNavigation')
  }, [user])
  return (
    <HStack className="topNav">
      <Button margin="1rem" colorScheme="teal">
        <Link to={'/'}>Home {user.name}</Link>
      </Button>
      <Text>{user.name}</Text>
      {loggedIn === false ? (
        <>
          <Button colorScheme="teal">
            <Link to={'/login'}>Login</Link>
          </Button>
          <Text>{user.name}</Text>
        </>
      ) : (
        <>
          <Button colorScheme="teal">
            <Link to={'/boxes'}>Boxes</Link>
          </Button>
          <Button colorScheme="teal">
            <Link to={'/items'}>Items</Link>
          </Button>
          <Button colorScheme="teal" onClick={OnLogout}>
            Logout
          </Button>
        </>
      )}
    </HStack>
  )
}

export default AppNavigation
