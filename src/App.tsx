import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ChakraProvider, Box, HStack } from '@chakra-ui/react'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Boxes from './pages/Boxes'
import Boxe from './pages/Boxe'
import Items from './pages/Items'
import Item from './pages/Item'
import { UserContext } from './context/UserContext'

function App() {
  const { user, setUser } = useContext(UserContext)
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  )
}

export default App
