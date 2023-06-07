import React, {useState, useEffect, useContext} from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react'
import {UserContext, UserIfc} from "../context/UserContext"
import {APIEndPointsContext} from "../context/APIContext"



const UserInfo = ({onUserInfoSubmit}:{onUserInfoSubmit: (user: UserIfc) => void}) => {
  const { apiEndPoints } = useContext(APIEndPointsContext)
  const { user, setUser } = useContext(UserContext)
  const [userLocal, setUserLocal] = useState<UserIfc>({})
  const [prevUserLocal, setPrevUserLocal] = useState<UserIfc>({})
  useEffect(() => {
    if (user.name != '') {
      setUserLocal(user)
      if(prevUserLocal.name == ''){
        setPrevUserLocal(user)
      }
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUserInfoSubmit(user)
  }

  return (
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>From Address</FormLabel>
            <Input
                type="text"
                name="fromAddress"
                value={user.fromAddress}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>From City</FormLabel>
            <Input
                type="text"
                name="fromCity"
                value={user.fromCity}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>From State</FormLabel>
            <Input
                type="text"
                name="fromState"
                value={user.fromState}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>From Zip Code</FormLabel>
            <Input
                type="text"
                name="fromZipCode"
                value={user.fromZipCode}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>To Address</FormLabel>
            <Input
                type="text"
                name="toAddress"
                value={user.toAddress}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>To City</FormLabel>
            <Input
                type="text"
                name="toCity"
                value={user.toCity}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>To State</FormLabel>
            <Input
                type="text"
                name="toState"
                value={user.toState}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>To Zip Code</FormLabel>
            <Input
                type="text"
                name="toZipCode"
                value={user.toZipCode}
                onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cell Phone</FormLabel>
            <Input
                type="text"
                name="cellPhone"
                value={user.cellPhone}
                onChange={handleChange}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
  )
}

export default UserInfo
