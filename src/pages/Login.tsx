import React, { useContext, useEffect, useState } from 'react'
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from '@chakra-ui/react'
import { APIEndPointsContext } from '../context/APIContext'
import { UserContext } from '../context/UserContext'
import {useNavigate} from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { apiEndPoints } = useContext(APIEndPointsContext)
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  console.log('User From Context: ', user)
  useEffect(() => {
    // This effect will run whenever the myContext value changes
    // and trigger a re-render by updating the forceUpdate state.
    console.log('UpdateForced 2')
    console.log(user)
  }, [user])
  const handleShowClick = () => setShowPassword(!showPassword)
  const handleLoginClick = () => {
    console.log('Users Context Data: ', user)
    fetch(apiEndPoints.login) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data)
        navigate('/')
        //ParentUpdate(user)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <form>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    autoComplete="password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </form>
            <Button
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            gps
          </Stack>
        </Box>
        <Box
          padding="0.5rem"
          color="teal.600"
          minW={{ base: '90%', md: '468px' }}
          maxW={{ base: '90%', md: '468px' }}
        >
          Demo Mode a login will automatically be created if it does not exist
          for the Email entered.
        </Box>
      </Stack>
    </>
  )
}
