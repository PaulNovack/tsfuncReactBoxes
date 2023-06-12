import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Flex, extendTheme, Heading } from '@chakra-ui/react'
import UserProvider, { UserContext } from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'
import './App.css'

const components = {
  Input: {
    variants: {
      outline: {
        field: {
          margin: '.25rem',
          borderColor: 'teal',
          _hover: {
            borderColor: 'teal',
          },
        },
      },
    },
  },
}

const theme = extendTheme({ components })
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
        <BrowserView>
          <Heading>Browser View</Heading>

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
          <Heading>Mobile View</Heading>
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
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
