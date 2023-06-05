import React, { useState } from 'react'
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

// eslint-disable-next-line @typescript-eslint/naming-convention
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

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
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
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
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
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

export default Login
