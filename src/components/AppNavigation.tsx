import React from 'react'
import { Link } from 'react-router-dom'

import { Button, HStack } from '@chakra-ui/react'


// eslint-disable-next-line @typescript-eslint/naming-convention
const AppNavigation = () => {
  return (
    <HStack className="topNav">
      <Button margin="1rem" colorScheme="teal">
        <Link to={'/'}>Home</Link>
      </Button>

      <Button colorScheme="teal">
        <Link to={'/login'}>Login</Link>
      </Button>

      <Button colorScheme="teal">
        <Link to={'/boxes'}>Boxes</Link>
      </Button>
      <Button colorScheme="teal">
        <Link to={'/items'}>Items</Link>
      </Button>
      <Button colorScheme="teal">
        <Link to={'/logout'}>Logout</Link>
      </Button>
    </HStack>
  )
}

export default AppNavigation
