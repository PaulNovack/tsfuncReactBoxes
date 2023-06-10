import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import UserProvider, {
  UserIfc,
  defaultUser,
  UserContext,
} from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'

function App() {
  const [AppUser, setAppUser] = useState<UserIfc>(defaultUser)
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    console.log('App.tsx useEffect triggered')
    setUser(user)
  }, [user])
  const ParentUpdate = (user: UserIfc) => {
    console.log('App.tsx useEffect triggered')
    setUser(user)
  }
  return (
    <UserProvider>
      <ChakraProvider>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          backgroundColor="gray.200"
          alignItems="left"
        >
          <BrowserRouter>
            <div className="app">
              <AppNavigation
                appUser={AppUser}
                setAppUser={setAppUser}
                ParentUpdate={ParentUpdate}
              />
              <AppRoutes
                appUser={AppUser}
                setAppUser={setAppUser}
                ParentUpdate={ParentUpdate}
              />
            </div>
          </BrowserRouter>
        </Flex>
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
