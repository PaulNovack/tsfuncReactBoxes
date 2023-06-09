import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, HStack, Text } from '@chakra-ui/react'
import {defaultUser, UserIfc} from '../context/UserContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
const AppNavigation = () => {
  const [user, setUser] = useState<UserIfc>(defaultUser)
  return (
    <HStack className="topNav">
      <Button margin="1rem" colorScheme="teal">
        <Link to={'/'}>Home {user.name}</Link>
      </Button>
      <Text>{user.name}</Text>
      {user.name === '' ? (
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
          <Button colorScheme="teal">
            <Link to={'/logout'}>Logout</Link>
          </Button>
        </>
      )}
    </HStack>
  )
}

export default AppNavigation
