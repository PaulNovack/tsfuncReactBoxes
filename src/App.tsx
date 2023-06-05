import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ChakraProvider, HStack, Flex, Button } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logout from './pages/Logout'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UserInfo from './pages/UserInfo'
import UserProvider, { UserContext } from './context/UserContext'

function GetUserData() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    setUser({
      name: 'Paul Novack',
      email: 'paul.novack@gmail.com',
    })
  })
  return <></>
}

function App() {
  const { user } = useContext(UserContext)
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        alignItems="left"
      >
        <UserProvider>
          <BrowserRouter>
            <div className="app">
              <HStack className="topNav">
                <Button margin="1rem" colorScheme="teal">
                  <Link to={'/'}>Home</Link>
                </Button>

                {!user.accessToken ? (
                  <Button colorScheme="teal">
                    <Link to={'/login'}>Login</Link>
                  </Button>
                ) : (
                  <Button colorScheme="teal">
                    <Link to={'/logout'}>Logout</Link>
                  </Button>
                )}
              </HStack>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/*
              <Route path="/logout" element={<Logout />} />
              <Route path="/boxes" element={<Boxes />} />
              <Route path="/box" element={<Boxe />} />
              <Route path="/items" element={<Items />} />
              <Route path="/item" element={<Item />} />
              <Route path="/userinfo" element={<UserInfo />} />
              */}
              </Routes>
              <GetUserData />
            </div>
          </BrowserRouter>
        </UserProvider>
      </Flex>
    </ChakraProvider>
  )
}

export default App
