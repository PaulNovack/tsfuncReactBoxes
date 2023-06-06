import React from 'react'
import { BrowserRouter, } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import UserProvider from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'


function App() {
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
              <AppNavigation/>
              <AppRoutes />
            </div>
          </BrowserRouter>
        </Flex>
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
