import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, HStack, Text } from '@chakra-ui/react'
import { defaultUser, UserContext, UserIfc } from '../context/UserContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppNavigation({ userLocal }: { userLocal: UserIfc }) {
  // const [user, setUser] = useState<UserIfc>(defaultUser)
  const { user, setUser } = useContext(UserContext)
  function Logout() {
    setUser(defaultUser)
  }
  return (
    <HStack className="topNav">
      <Button margin="1rem" colorScheme="teal">
        <Link to={'/'}>Home {userLocal.name}</Link>
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
          <Button colorScheme="teal" onClick={Logout}>
            Logout
          </Button>
        </>
      )}
    </HStack>
  )
}
