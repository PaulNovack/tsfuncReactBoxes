import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box, HStack } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logout from './pages/Logout'
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
      <UserProvider>
        <BrowserRouter>
          <div className="app">
            <HStack>
              <Box>
                <Link to={'/'}>Home</Link>
              </Box>

              {!user.accessToken ? (
                <Box>
                  <Link to={'/login'}>Login</Link>
                </Box>
              ) : (
                <Box>
                  <Link to={'/logout'}>Logout</Link>
                </Box>
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
              */}
            </Routes>
            <GetUserData />
          </div>
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  )
}

export default App
