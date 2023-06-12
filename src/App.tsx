import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  ChakraProvider,
  Flex,
    Container,
} from '@chakra-ui/react'
import UserProvider, { UserContext } from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'
import {
  BrowserView,
  MobileView,
  isMobile,
} from 'react-device-detect'
import './App.css'

function App() {
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    console.log('App.tsx useEffect triggered')
    console.log('isMobile: ', isMobile)
    setUser(user)
  }, [user])
  return (
    <UserProvider>
      <ChakraProvider>
        <Container>
          <BrowserView>
            <Flex
              flexDirection="column"
              backgroundColor="gray.200"
              alignItems="left"
            >
              <BrowserRouter>
                <div className="app">
                  <AppNavigation userLocal={user} />
                  <AppRoutes />
                </div>
              </BrowserRouter>
            </Flex>
          </BrowserView>
          <MobileView>
            <Flex
              flexDirection="column"
              backgroundColor="gray.200"
              alignItems="left"
            >
              <BrowserRouter>
                <div className="app">
                  <AppNavigation userLocal={user} />
                  <AppRoutes />
                </div>
              </BrowserRouter>
            </Flex>
          </MobileView>
        </Container>
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
