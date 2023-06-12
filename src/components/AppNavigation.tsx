import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Button, HStack, Text } from '@chakra-ui/react'
import { defaultUser, UserContext, UserIfc } from '../context/UserContext'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppNavigation({ userLocal }: { userLocal: UserIfc }) {
  // const [user, setUser] = useState<UserIfc>(defaultUser)
  const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
  function Logout() {
    setUser(defaultUser)
  }
  return (
    <HStack className="topNav">
      <Button margin="1rem" colorScheme="teal">
        <Link to={'/'}>Home {userLocal.name}</Link>
      </Button>
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
          <Button colorScheme="teal" onClick={Logout}>
              <Link to={'/'}>Logout</Link>
          </Button>
        </>
      )}
    </HStack>
  )
}
