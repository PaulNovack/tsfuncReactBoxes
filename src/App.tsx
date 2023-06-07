import React, { useMemo } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import AppNavigation from './components/AppNavigation'
import UserContext, { UserContextState, UserIfc } from './context/UserContext'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Boxes from "./pages/Boxes"
import Boxe from "./pages/Boxe"
import Items from "./pages/Items"
import Item from "./pages/Item"
import UserInfo from "./pages/UserInfo"

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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/boxes" element={<Boxes />} />
                  <Route path="/box" element={<Boxe />} />
                  <Route path="/items" element={<Items />} />
                  <Route path="/item" element={<Item />} />
                  <Route path="/userinfo" element={<UserInfo />} />
                </Routes>
              </div>
            </BrowserRouter>
          </Flex>
        </ChakraProvider>
      </UserContext.Provider>
  )
}

export default App

