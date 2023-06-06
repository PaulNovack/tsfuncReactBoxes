import React, {useContext, useState} from 'react'
import { BrowserRouter, } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import  {UserIfc} from './context/UserContext'
import AppRoutes from './components/AppRoutes'
import AppNavigation from './components/AppNavigation'


function App() {
  const [ user, setUser ] = useState({id:1,name: "Paul Novack"})
  const userContextValue: UserIfc = {id: 0}
  if(userContextValue.id == 0){
    //  const userContextnew: UserIfc = {id: 1,name: "Paul Novack"}
    //  setUser(userContextnew)
  }

  return (

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
  )
}

export default App
