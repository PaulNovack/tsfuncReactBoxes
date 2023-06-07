import React, { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'

import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'
import UserContext, { UserContextState, UserIfc } from './context/UserContext'

function App() {
  const contextValue: UserContextState = useMemo(() => {
    const val: UserContextState = {
      user: {} as UserIfc,
      setUser: () => {},
    }
    return val
  }, [])

  return (
      <UserContext.Provider value={contextValue}>
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
                <AppNavigation />
                <AppRoutes />
              </div>
            </BrowserRouter>
          </Flex>
        </ChakraProvider>
      </UserContext.Provider>
  )
}

export default App

