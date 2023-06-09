import React, { useContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import UserProvider, {
  defaultUserState,
  UserContext,
  UserContextInterface,
  UserIfc,
} from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'
import { APIEndPointsContext } from './context/APIContext'
import { redirect } from 'react-router'

function App() {
  const { apiEndPoints } = useContext(APIEndPointsContext)
  const { user, setUser } = useContext(UserContext)
  const [loggedIn, setLoggedIn] = useState(false)
  const LoginFunc = () => {
    console.log('Users Context Data: ', user)
    fetch(apiEndPoints.login) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log('Setting Data')
        console.log(data)
        setUser(data as UserIfc)
        console.log('Users Context Data after set: ', user)
        setLoggedIn(true)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  const LogoutFunc = () => {
    console.log('Logging Out')

    setLoggedIn(false)
  }
  const UserInfoFunc = () => {
    console.log('UserInfo Function')
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
              <AppNavigation loggedIn={loggedIn} OnLogout={LogoutFunc} />
              <AppRoutes
                AppLogin={LoginFunc}
                LoggedIn={loggedIn}
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
