import React from 'react'
import {
  Heading,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Image width="15rem" src="images/boxes.png" alt="Dan Abramov" />

        <Heading color="teal.400">Boxes Application</Heading>
        <Box
          padding="0.5rem"
          color="teal.600"
          minW={{ base: '90%', md: '468px' }}
          maxW={{ base: '90%', md: '468px' }}
        >
          &nbsp;&nbsp;An Application to track boxes for moving and items packed
          in boxes. Mostly just an application to play around with programming
          the same appllication different ways.
        </Box>
        <Box
          padding="0.5rem"
          color="teal.600"
          minW={{ base: '90%', md: '468px' }}
          maxW={{ base: '90%', md: '468px' }}
        >
          &nbsp;&nbsp;This is mostly just an application to play around with
          programming the same appllication different ways.
        </Box>
        <Box
          padding="0.5rem"
          color="teal.600"
          minW={{ base: '90%', md: '468px' }}
          maxW={{ base: '90%', md: '468px' }}
        >
          &nbsp;&nbsp;This version written with a typescript, react Front-end.
          Back-end in c++ using the Drogon Web Framework with ssdb (redis clone)
          as a datastore.
        </Box>
      </Stack>
    </>
  )
}

export default Home
