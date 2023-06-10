import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { Button, HStack, Text } from '@chakra-ui/react'
import {defaultUser, UserContext, UserIfc} from '../context/UserContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppNavigation({
  appUser,
  setAppUser,
  ParentUpdate,
}: {
  appUser: UserIfc
  setAppUser: Dispatch<SetStateAction<UserIfc>>
  ParentUpdate: (user: UserIfc) => void
}) {
 // const [user, setUser] = useState<UserIfc>(defaultUser)
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    setUser(appUser)
      console.log("App Navigation Use Effect triggered")
  }, [user])
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
