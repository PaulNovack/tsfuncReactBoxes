import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import UserProvider, { UserContext } from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'
import { APIEndPointsContext } from './context/APIContext'

function App() {
  const { apiEndPoints } = useContext(APIEndPointsContext)
  const { user, setUser } = useContext(UserContext)
  const LoginFunc = () => {
    console.log('Users Context Data: ', user)
    fetch(apiEndPoints.login) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  const UserInfoFunc = () => {
    console.log('Users Context Data: ', user)
    fetch(apiEndPoints.login) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
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
              <AppNavigation />
              <AppRoutes
                LoginFunc={LoginFunc}
                onUserInfoSubmit={UserInfoFunc}
              />
            </div>
          </BrowserRouter>
        </Flex>
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
