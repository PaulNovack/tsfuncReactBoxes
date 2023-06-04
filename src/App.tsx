import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box, HStack } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Boxes from './pages/Boxes'
import Boxe from './pages/Boxe'
import Items from './pages/Items'
import Item from './pages/Item'
import UserProvider, { UserContext } from './context/UserContext'

function UserDetails() {

  const {user} = useContext(UserContext)
  return (
    <>
      <p>User Name:</p>
      <p>User Email: </p>
    </>
  )
}
function AnotherComponent() {

  const {user, setUser} = useContext(UserContext)
  useEffect(() => {
    setUser({
      name: "Paul Novack",
      email: 'paul.novack@gmail.com'
    })
  })
  return (
    <>
      <p>Some Other Component</p>
    </>
  )
}

function App() {
  return (
    <ChakraProvider>
      <UserProvider>
        <UserDetails />.
        <AnotherComponent />
        <BrowserRouter>
          <div className="app">
            <HStack>
              <Box>
                <Link to={'/'}>Home</Link>
              </Box>
              <Box>
                <Link to={'/login'}>Login</Link>
              </Box>
              <Box>
                <Link to={'/logout'}>Logout</Link>
              </Box>
              <Box>
                <Link to={'/boxes'}>Boxes</Link>
              </Box>
            </HStack>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/boxes" element={<Boxes />} />
              <Route path="/box" element={<Boxe />} />
              <Route path="/items" element={<Items />} />
              <Route path="/item" element={<Item />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  )
}

export default App
